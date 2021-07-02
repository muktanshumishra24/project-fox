import React, { useState } from 'react';
import { PixelDustBoard } from 'pixel-dust';
import ToolBox from 'components/tool-box';
import {
  DrawingBoardContainer,
  CanvasWrapper,
  ToolBoxWrapper,
  LayerBoxWrapper
} from './drawing-board.styles';

function DrawingBoard(): JSX.Element {
  const [activeForegroundRGBA, setActiveForegroundRGBA] = useState<string>('black');
  const [activeBackgroundRGBA, setActiveBackgroundRGBA] = useState<string>('white');

  console.log(activeBackgroundRGBA);

  return (
    <DrawingBoardContainer>
      <ToolBoxWrapper>
        <ToolBox
          onChangeForegroundColor={setActiveForegroundRGBA}
          onChangeBackgroundColor={setActiveBackgroundRGBA}
        />
      </ToolBoxWrapper>
      <CanvasWrapper>
        <PixelDustBoard
          foregroundColor={activeForegroundRGBA}
          backgroundColor={activeBackgroundRGBA}
        />
      </CanvasWrapper>
      <LayerBoxWrapper />
    </DrawingBoardContainer>
  );
}

export default DrawingBoard;
