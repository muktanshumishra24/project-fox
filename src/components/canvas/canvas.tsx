import React, { Component } from 'react';
import { ArtEngine } from './art-engine';
import { CanvasContainer } from './canvas.styles';

type PixelCanvasProps = Record<string, never>;

type PixelCanvasState = Record<string, never>;

class PixelCanvas extends Component<PixelCanvasProps, PixelCanvasState> {
  artEngine = new ArtEngine('art-engine-root');

  canvasGrabProp = { isGrabbed: false, iX: 0, iY: 0, fX: 0, fY: 0 };

  root: HTMLElement | null = null;

  constructor(props: PixelCanvasProps) {
    super(props);
    this.moveRootBegin = this.moveRootBegin.bind(this);
    this.moveRoot = this.moveRoot.bind(this);
    this.moveRootEnd = this.moveRootEnd.bind(this);
  }

  componentDidMount(): void {
    try {
      this.artEngine.initialize();
    } catch (error) {
      console.error(error);
    }

    this.root = document.querySelector('#art-engine-root');
    this.canvasGrabProp.iX = Number(this.root?.style.getPropertyValue('--position-x'));
    this.canvasGrabProp.iY = Number(this.root?.style.getPropertyValue('--position-y'));
  }

  shouldComponentUpdate(): boolean {
    return false;
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
  }

  render(): JSX.Element {
    return (
      <CanvasContainer
        style={{}}
        id="art-engine-root"
        onMouseDown={this.moveRootBegin}
        onMouseUp={this.moveRootEnd}
        onMouseMove={this.moveRoot}
      />
    );
  }
}

export default PixelCanvas;
