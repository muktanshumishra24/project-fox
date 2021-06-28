import { LayerManager } from './layer-manager';
import { Command } from './types';

class CommandParser {
  height: number;

  width: number;

  gridElemSize: number;

  layerManager: LayerManager;

  constructor(height: number, width: number, layerManager: LayerManager) {
    this.height = height;
    this.width = width;
    this.layerManager = layerManager;

    this.gridElemSize = Math.floor(this.height / 64);
  }

  convertToGrid(command: Command): Command {
    const { x, y } = command;

    return {
      ...command,
      x: Math.floor(x / this.gridElemSize),
      y: Math.floor(y / this.gridElemSize)
    };
  }

  execute(command: Command): void {
    this.layerManager.activeLayer?.apply(command);
  }
}

export { CommandParser };
