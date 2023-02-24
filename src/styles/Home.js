import styled, { keyframes } from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 700px;
`;

export const DivCenter = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

export const StyledH1 = styled.h1`
  color: #90a0d9;
  font-size: 3.5em;
  display: flex;
  width: 100%;
`;

export const SpanColorized = styled.span`
  color: #90a0d9;
  width: 100%;
`;

export const animHomePage = keyframes`
  from{
    opacity: 0;
    transform: translate3d(-30px,0,0);
  }
  to{
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

export const AboutMe = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 25px auto;
  color: #90a0d9;
  text-align: justify;

  p {
    animation: ${animHomePage} 1s ease;
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
`;

export const DivTypical = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto 30px;
  animation: ${animHomePage} 1s ease;
`;
