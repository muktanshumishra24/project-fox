import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;

  overflow: hidden;

  display: flex;
`;

export const LeftContainer = styled.div`
  width: 820px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  border-radius: 32px 0px 0px 32px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc4e18' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d73133' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23db004d' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d6006b' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c7008a' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-size: cover;
  background-position: center bottom;

  overflow: hidden;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;

export const ProductCoverContainer = styled.div`
  width: 75vw;
  position: absolute;

  top: 50%;
  right: 0%;

  transform: translateX(50%) translateY(-50%);
`;

export const PreviewCard = styled.div<{ imageUrl: string; top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;

  width: 200px;
  height: 200px;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  background-color: rgb(255, 255, 255);

  &::before {
    content: '';
    background-image: url(${(props) => props.imageUrl});
    height: 100%;
    width: 100%;
    display: block;
    background-size: cover;
  }
`;

export const ProductCoverWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 48%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const ProductCover = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const TextWrapper = styled.div`
  width: 80%;

  & > div + div {
    margin-top: 12px;
  }
`;

export const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 58px;
  font-weight: 700;
  color: #343f56;
`;

export const SubtitleWrapper = styled.div`
  font-size: 18px;
  color: #343f56;

  opacity: 0.7;
`;

export const SignInButton = styled.button`
  display: block;
  padding: 12px;
  margin-top: 24px;

  display: flex;

  border: 1px #a7bbc7 solid;

  border-radius: 8px;

  background-color: #ffffff;

  transition: all 0.5s;

  cursor: pointer;

  & > svg {
    font-size: 18px;
  }

  & > span {
    margin-left: 8px;
    vertical-align: middle;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 18px;

    opacity: 0.6;
  }

  &:hover {
    background-color: #f9f9f9;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
