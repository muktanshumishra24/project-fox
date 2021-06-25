import { Command, CommandType, PixelCanvasInterface } from './types';

class PixelCanvas implements PixelCanvasInterface {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  gridElemSize: number;

  constructor(height: number, width: number) {
    this.canvas = document.createElement('canvas');
    this.canvas.height = height;
    this.canvas.width = width;
    this.gridElemSize = Math.floor(height / 64);
    this.canvas.setAttribute('style', 'position: absolute; top: 0; left: 0');

    const ctx = this.canvas.getContext('2d');

    if (ctx) {
      this.ctx = ctx;
    } else {
      throw Error('getContext returned null');
    }
  }

  apply(command: Command): void {
    switch (command.type) {
      case CommandType.DRAW:
        this.ctx.fillRect(
          command.x * this.gridElemSize,
          command.y * this.gridElemSize,
          this.gridElemSize,
          this.gridElemSize
        );
        break;
      default:
        break;
    }
  }
}

export { PixelCanvas };
