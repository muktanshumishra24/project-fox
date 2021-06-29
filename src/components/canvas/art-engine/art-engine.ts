import { PixelCanvas } from './pixel-canvas';
import { LayerManager } from './layer-manager';
import { ArtEngineInterface, Command, Layer } from './types';
import { CommandParser } from './command-parser';

class ArtEngine implements ArtEngineInterface {
  height = 0;

  width = 0;

  layerManager: LayerManager;

  commandParser: CommandParser;

  root: HTMLElement | null = null;

  constructor(id: string) {
    this.root = document.querySelector(`#${id}`) as HTMLElement;
    if (this.root) {
      this.height = this.root.clientHeight;
      this.width = this.height;

      this.root.style.setProperty('min-width', `${this.height}px`);

      this.layerManager = new LayerManager(this.root);
      this.commandParser = new CommandParser(this.height, this.width, this.layerManager);

      this.layerManager.addLayer(new PixelCanvas(this.height, this.width));
      this.layerManager.addLayer(new PixelCanvas(this.height, this.width));
      this.layerManager.setActiveLayer(0);
    } else {
      throw Error('art engine root element not found');
    }
  }

  execute(command: Command): void {
    const convertedCommand = this.commandParser.convertToGrid(command);
    this.commandParser.execute(convertedCommand);
  }

  addLayer(): void {
    this.layerManager.addLayer(new PixelCanvas(this.height, this.width));
  }

  setActiveLayer(idx: number): void {
    this.layerManager.setActiveLayer(idx);
  }

  onLayerChange(cb: (value: Layer[]) => void): void {
    this.layerManager.onLayerChange(cb);
  }
}

export { ArtEngine };
