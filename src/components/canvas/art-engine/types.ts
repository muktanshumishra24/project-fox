// eslint-disable-next-line import/no-cycle
import { PixelCanvas } from './pixel-canvas';

export interface PixelCanvasInterface {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

export interface ArtEngineInterface {
  height: number;
  width: number;
}

export enum CommandType {
  DRAW = 'draw',
  ERASE = 'erase'
}

export interface BaseCommand {
  type: CommandType;
}

export interface DrawCommand extends BaseCommand {
  type: CommandType.DRAW;
  x: number;
  y: number;
}

export interface EraseCommand extends BaseCommand {
  type: CommandType.ERASE;
  x: number;
  y: number;
}

export type Command = DrawCommand | EraseCommand;

export type Layer = {
  pixelCanvas: PixelCanvas;
  isActive: boolean;
};
