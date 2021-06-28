import { PixelCanvas } from './pixel-canvas';

class LayerManager {
  root: HTMLElement;

  layerBuffer: PixelCanvas[] = [];

  activeLayer: PixelCanvas | undefined;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  setActiveLayer(idx: number): void {
    this.activeLayer = this.layerBuffer[idx];
  }

  addLayer(pixelCanvas: PixelCanvas): void {
    this.root.appendChild(pixelCanvas.canvas);
    this.layerBuffer.push(pixelCanvas);
  }

  removeLayer(pixelCanvas: PixelCanvas): void {
    this.layerBuffer = this.layerBuffer.filter((item) => item !== pixelCanvas);
  }
}

export { LayerManager };
