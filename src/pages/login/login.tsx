import React, { useContext, useEffect } from 'react';
import { AuthContext } from 'provider/auth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import ProductCoverImage from 'assets/images/product_cover.webp';
import HomeCardImage1 from 'assets/images/home_card_image_1.webp';
import HomeCardImage2 from 'assets/images/home_card_image_2.webp';
import {
  LeftContainer,
  LoginPageContainer,
  RightContainer,
  SubtitleWrapper,
  TitleWrapper,
  TextWrapper,
  SignInButton,
  Overlay,
  ProductCoverWrapper,
  ProductCover,
  ProductCoverContainer,
  PreviewCard
} from './login.styles';

function Login(): JSX.Element {
  const { user, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('../', { replace: true });
    }
  }, [navigate, user]);

  return (
    <LoginPageContainer>
      <LeftContainer>
        <TextWrapper>
          <TitleWrapper>Pixel Dust Editor 🎨</TitleWrapper>
          <SubtitleWrapper>
            A pixel art ecosystem for artists who love being creative with constraints
          </SubtitleWrapper>
          <SignInButton onClick={googleSignIn}>
            <GoogleIcon />
            <span>Sign In</span>
          </SignInButton>
        </TextWrapper>
      </LeftContainer>
      <RightContainer>
        <Overlay>
          <ProductCoverContainer>
            <PreviewCard imageUrl={HomeCardImage1} top={-80} left={-80} />
            {/* <PreviewCard imageUrl={HomeCardImage2} top={-60} left={-100} /> */}
            <ProductCoverWrapper>
              <ProductCover src={ProductCoverImage} />
            </ProductCoverWrapper>
          </ProductCoverContainer>
        </Overlay>
      </RightContainer>
    </LoginPageContainer>
  );
}

export default Login;
