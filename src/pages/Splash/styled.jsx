import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
0% {
  opacity: 0;
  transform: translateY(80px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const SplashPage = styled.div`
  display: ${({ display }) => display};
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 10;

  .logo {
    display: block;
    width: 120px;
    margin: 0px auto;
    margin-top: 212px;
    animation: ${fadeInOut} 0.5s linear forwards;
  }
`;

export default SplashPage;
