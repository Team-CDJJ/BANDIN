import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
0% {
  opacity: 0;
  transform: translateY(200%);
}
100% {
  opacity: 1;
  transform: translateY(170%);
}
`;

const SplashPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  align-items: center;

  .logo {
    display: block;
    width: 120px;
    margin: 0px auto;
    transform: translateY(170%);
    animation: ${fadeInOut} 0.5s linear forwards;
  }
`;

export default SplashPage;
