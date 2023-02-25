import styled from "styled-components";
import { animHomePage } from "./Home";

export const DivSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  animation: ${animHomePage} 1s ease;
`;

export const SectionWrapper = styled.section`
  text-align: center;
  animation: ${animHomePage} 2s ease;
`;

export const Divicons = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  color: #90a0d9;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    font-size: 2rem;
    margin: 0 20px;
  }
  ul {
    text-align: left;
  }
  .list {
    color: #0d6efd;
    margin: 2px 5px;
  }
`;

export const DivList = styled.div`
  ul {
    list-style: none;
    margin: 0 5px;
  }
`;
