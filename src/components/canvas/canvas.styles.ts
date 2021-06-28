import styled from 'styled-components';

export const CanvasContainer = styled.div`
  background-color: #ffffff;
  height: 90%;
  position: relative;
  border: 1px black solid;
  --position-x: 0;
  --position-y: 0;
  transform: translateX(calc(var(--position-x) * 1px)) translateY(calc(var(--position-y) * 1px));
`;
