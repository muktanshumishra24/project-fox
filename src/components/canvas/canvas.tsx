import React, { Component } from 'react';
import { ArtEngine } from './art-engine';
import { CommandType, Layer } from './art-engine/types';
import { CanvasContainer } from './canvas.styles';

type PixelCanvasProps = {
  onChangeLayer: (value: Layer[]) => void;
  activeLayerIdx: number;
};

type PixelCanvasState = Record<string, never>;

class PixelCanvas extends Component<PixelCanvasProps, PixelCanvasState> {
  artEngine: ArtEngine | undefined;

  canvasGrabProp = { isGrabbed: false, iX: 0, iY: 0, fX: 0, fY: 0 };

  activeInteraction = {
    canvasDrag: false,
    penDraw: false
  };

  coordinateSystem = {
    top: 0,
    left: 0
  };

  root: HTMLElement | null = null;

  constructor(props: PixelCanvasProps) {
    super(props);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.moveRootBegin = this.moveRootBegin.bind(this);
    this.moveRoot = this.moveRoot.bind(this);
    this.moveRootEnd = this.moveRootEnd.bind(this);
    this.handleKeyboardInteraction = this.handleKeyboardInteraction.bind(this);
    this.setCoordinateSystem = this.setCoordinateSystem.bind(this);
  }

  componentDidMount(): void {
    try {
      const { onChangeLayer } = this.props;

      this.artEngine = new ArtEngine('art-engine-root');
      this.artEngine.onLayerChange(onChangeLayer);
    } catch (error) {
      console.error(error);
    }

    this.root = document.querySelector('#art-engine-root');
    this.canvasGrabProp.iX = Number(this.root?.style.getPropertyValue('--position-x'));
    this.canvasGrabProp.iY = Number(this.root?.style.getPropertyValue('--position-y'));

    window.addEventListener('keydown', this.handleKeyboardInteraction);
    window.addEventListener('keyup', this.handleKeyboardInteraction);

    this.setCoordinateSystem();
  }

  shouldComponentUpdate(nextProps: PixelCanvasProps): boolean {
    if (this.artEngine?.layerManager.activePixelIdx !== nextProps.activeLayerIdx) {
      this.artEngine?.setActiveLayer(nextProps.activeLayerIdx);
    }
    return false;
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeyboardInteraction);
    window.removeEventListener('keyup', this.handleKeyboardInteraction);
  }

  handleKeyboardInteraction(event: KeyboardEvent): void {
    if (event.type === 'keydown') {
      switch (event.code) {
        case 'Space':
          this.root?.style.setProperty('cursor', 'grab');
          this.activeInteraction.canvasDrag = true;
          break;
        default:
          break;
      }
    } else if (event.type === 'keyup') {
      switch (event.code) {
        case 'Space':
          this.root?.style.setProperty('cursor', 'unset');
          this.activeInteraction.canvasDrag = false;
          break;
        default:
          break;
      }
    }
  }

  handleMouseDown(event: React.MouseEvent<HTMLDivElement>): void {
    if (this.activeInteraction.canvasDrag) {
      this.moveRootBegin(event);
    } else {
      this.activeInteraction.penDraw = true;
      this.artEngine?.execute({
        type: CommandType.DRAW,
        x: event.clientX - this.coordinateSystem.left,
        y: event.clientY - this.coordinateSystem.top
      });
    }
  }

  handleMouseMove(event: React.MouseEvent<HTMLDivElement>): void {
    if (this.activeInteraction.penDraw) {
      this.artEngine?.execute({
        type: CommandType.DRAW,
        x: event.clientX - this.coordinateSystem.left,
        y: event.clientY - this.coordinateSystem.top
      });
      return;
    }

    if (this.activeInteraction.canvasDrag) {
      this.moveRoot(event);
    } else {
      this.moveRootEnd();
    }
  }

  handleMouseUp(): void {
    if (this.activeInteraction.penDraw) {
      this.activeInteraction.penDraw = false;
    }

    if (this.activeInteraction.canvasDrag) {
      this.moveRootEnd();
    }
  }

  setCoordinateSystem(): void {
    const { top, left } = this.root?.getBoundingClientRect() as DOMRect;
    this.coordinateSystem.top = top;
    this.coordinateSystem.left = left;
  }

  moveRootBegin(event: React.MouseEvent<HTMLDivElement>): void {
    this.canvasGrabProp.isGrabbed = true;
    this.canvasGrabProp.iX = event.clientX;
    this.canvasGrabProp.iY = event.clientY;
  }

  moveRoot(event: React.MouseEvent<HTMLDivElement>): void {
    if (this.root && this.canvasGrabProp.isGrabbed) {
      requestAnimationFrame(() => {
        this.root?.style.setProperty(
          '--position-x',
          `${this.canvasGrabProp.fX + event.clientX - this.canvasGrabProp.iX}`
        );
        this.root?.style.setProperty(
          '--position-y',
          `${this.canvasGrabProp.fY + event.clientY - this.canvasGrabProp.iY}`
        );
      });
    }
  }

  moveRootEnd(): void {
    this.canvasGrabProp.isGrabbed = false;
    this.canvasGrabProp.fX = Number(this.root?.style.getPropertyValue('--position-x'));
    this.canvasGrabProp.fY = Number(this.root?.style.getPropertyValue('--position-y'));

    this.setCoordinateSystem();
  }

  render(): JSX.Element {
    return (
      <CanvasContainer
        id="art-engine-root"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
      />
    );
  }
}

export default PixelCanvas;
