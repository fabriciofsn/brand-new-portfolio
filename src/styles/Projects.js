import styled from "styled-components";
import { animHomePage } from "./Home";

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
`;
