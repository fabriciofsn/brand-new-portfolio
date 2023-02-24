import styled from "styled-components";
import { animHomePage } from "../styles/Home";

export const SocialMedias = styled.div`
  animation: ${animHomePage} 1s ease;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  .icon {
    color: #90a0d9;
    font-size: 2rem;
  }
`;
