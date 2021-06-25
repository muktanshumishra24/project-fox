import styled from 'styled-components';

export const DrawingBoardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  & > * + * {
    margin-left: 8px;
  }

  * {
    border-radius: 5px;
  }
`;

export const CanvasWrapper = styled.div`
  flex: 1;
  border: 1px grey solid;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToolBoxWrapper = styled.div`
  width: 360px;
  border: 1px grey solid;
`;

export const LayerBoxWrapper = styled.div`
  width: 140px;
  border: 1px grey solid;
`;
