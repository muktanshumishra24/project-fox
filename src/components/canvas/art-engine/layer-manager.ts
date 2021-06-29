import { PixelCanvas } from './pixel-canvas';
import { Layer } from './types';

class LayerManager {
  root: HTMLElement;

  layerStack: Layer[] = [];

  activePixelCanvas: PixelCanvas | undefined;

  activePixelIdx = 0;

  layerChangeCallback: (() => void) | undefined;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  setActiveLayer(idx: number): void {
    this.layerStack[this.activePixelIdx].isActive = false;

    this.activePixelIdx = idx;
    this.layerStack[idx].isActive = true;
    this.activePixelCanvas = this.layerStack[idx].pixelCanvas;
    if (this.layerChangeCallback) {
      this.layerChangeCallback();
    }
  }

  addLayer(pixelCanvas: PixelCanvas): void {
    this.root.appendChild(pixelCanvas.canvas);
    this.layerStack.push({ pixelCanvas, isActive: false });
    if (this.layerChangeCallback) {
      this.layerChangeCallback();
    }
  }

  removeLayer(pixelCanvas: PixelCanvas): void {
    this.layerStack = this.layerStack.filter((item) => item.pixelCanvas !== pixelCanvas);
    if (this.layerChangeCallback) {
      this.layerChangeCallback();
    }
  }

  onLayerChange(callback: (value: Layer[]) => void): void {
    this.layerChangeCallback = () => callback([...this.layerStack]);
    callback([...this.layerStack]);
  }
}

export { LayerManager };
