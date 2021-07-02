import PixelDustEngine from './pixel-dust-engine';
import { CanvasType } from './pixel-canvas';

export type PixelDustApiProps = {
  mountTarget: HTMLDivElement;
  dimension?: number;
  canvasType?: CanvasType;
};

class PixelDustApi {
  pixelDustEngine: PixelDustEngine;

  constructor({ mountTarget, dimension = 800, canvasType = CanvasType.X64 }: PixelDustApiProps) {
    this.pixelDustEngine = new PixelDustEngine({ mountTarget, dimension, canvasType });
  }

  setForegroundColor(color: string): void {
    this.pixelDustEngine.drawingState.foregroundColor = color;
  }

  setBackgroundColor(color: string): void {
    this.pixelDustEngine.drawingState.backgroundColor = color;
  }
}

export { CanvasType };
export default PixelDustApi;
