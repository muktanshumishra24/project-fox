import { PixelCanvasInterface } from './types';

class PixelCanvas implements PixelCanvasInterface {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  top = 0;

  left = 0;

  constructor(height: number, width: number, root: HTMLElement) {
    this.canvas = document.createElement('canvas');
    this.canvas.height = height;
    this.canvas.width = width;
    this.canvas.setAttribute('style', 'position: absolute; top: 0; left: 0');

    const ctx = this.canvas.getContext('2d');

    if (ctx) {
      this.ctx = ctx;
      this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
      root.appendChild(this.canvas);

      const rect = this.canvas.getBoundingClientRect();
      this.top = rect.top;
      this.left = rect.left;
    } else {
      throw Error('getContext returned null');
    }
  }

  onMouseDown(event: MouseEvent): void {
    console.log(event.clientX - this.left, event.clientY - this.top);
  }
}

export { PixelCanvas };
