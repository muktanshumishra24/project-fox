import { PixelCanvas } from './pixel-canvas';
import { LayerManager } from './layer-manager';
import { ArtEngineInterface } from './types';

class ArtEngine implements ArtEngineInterface {
  id: string;

  height = 0;

  width = 0;

  layerManager = new LayerManager();

  root: HTMLElement | null = null;

  constructor(_id: string) {
    this.id = _id;
  }

  initialize(): void {
    this.root = document.querySelector(`#${this.id}`) as HTMLElement;
    if (this.root) {
      this.height = this.root.clientHeight;
      this.width = this.height;

      this.root.style.setProperty('min-width', `${this.height}px`);

      this.layerManager.addLayer(new PixelCanvas(this.height, this.width, this.root));
    } else {
      throw Error('art engine root element not found');
    }
  }
}

export { ArtEngine };
