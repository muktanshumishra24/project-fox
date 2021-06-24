import React from 'react';
import Canvas from 'components/canvas';
import {
  DrawingBoardContainer,
  CanvasWrapper,
  ToolBoxWrapper,
  LayerBoxWrapper
} from './drawing-board.styles';

function DrawingBoard(): JSX.Element {
  return (
    <DrawingBoardContainer>
      <ToolBoxWrapper />
      <CanvasWrapper>
        <Canvas />
      </CanvasWrapper>
      <LayerBoxWrapper />
    </DrawingBoardContainer>
  );
}

export default DrawingBoard;
