import { PixelCanvas } from './pixel-canvas';

class LayerManager {
  layerBuffer: PixelCanvas[] = [];

  addLayer(canvas: PixelCanvas): void {
    this.layerBuffer.push(canvas);
  }

  removeLayer(canvas: PixelCanvas): void {
    this.layerBuffer = this.layerBuffer.filter((item) => item !== canvas);
  }
}

export { LayerManager };
