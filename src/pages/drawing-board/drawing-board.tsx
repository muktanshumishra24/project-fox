import React, { useState } from 'react';
import clx from 'classnames';
import Canvas from 'components/canvas';
import { Layer } from 'components/canvas/art-engine/types';
import {
  DrawingBoardContainer,
  CanvasWrapper,
  ToolBoxWrapper,
  LayerBoxWrapper,
  LayerCard
} from './drawing-board.styles';

function DrawingBoard(): JSX.Element {
  const [layers, setLayers] = useState<Layer[]>([]);
  const [activeLayerIdx, setActiveLayerIdx] = useState<number>(0);

  function onChangeLayer(value: Layer[]): void {
    setLayers(value);
  }

  return (
    <DrawingBoardContainer>
      <ToolBoxWrapper />
      <CanvasWrapper>
        <Canvas onChangeLayer={onChangeLayer} activeLayerIdx={activeLayerIdx} />
      </CanvasWrapper>
      <LayerBoxWrapper>
        {layers
          .map((layer, idx) => (
            <LayerCard
              className={clx({
                active: layer.isActive
              })}
              onClick={() => setActiveLayerIdx(idx)}
            />
          ))
          .reverse()}
      </LayerBoxWrapper>
    </DrawingBoardContainer>
  );
}

export default DrawingBoard;
