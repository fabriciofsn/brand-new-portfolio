import styled, { keyframes } from "styled-components";
import { animHomePage } from "./Home";

export const anim = keyframes`
  from{
    transform: translate3d(0,0,0);
  }
  to{
    transform: translate3d(0,-30px,0);
  }
`;

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 30px auto;
  animation: ${animHomePage} 1s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #90a0d9;
  text-align: center;

  div {
    &:hover {
      animation: ${anim} 0.5s forwards;
    }
  }
  p {
    width: 100%;
    max-width: 400px;
    text-align: justify;
  }

  a {
    text-decoration: none;
    margin: 0 5px;
    color: #90a0d9;
    font-size: 1.2rem;
  }

  .langs {
    width: 100%;
    max-width: 100px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
