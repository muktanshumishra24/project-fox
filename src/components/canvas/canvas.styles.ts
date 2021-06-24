import styled from 'styled-components';

export const CanvasContainer = styled.div`
  height: 90%;
  position: relative;
  border: 1px black solid;
  cursor: grab;
  --position-x: 0;
  --position-y: 0;
  // eslint-disable-next-line prettier/prettier
  transform: translateX(calc(var(--position-x) * 1px)) translateY(calc(var(--position-y) * 1px));
`;
