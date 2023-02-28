import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: 900px;
  margin: auto;

  a {
    padding: 0.5rem;
  }

  a.linkExternal {
    text-decoration: none;
    margin: 0 5px;
    color: white;
    background-color: #198754;
    border: 1px solid #198754;
    border-radius: 4px;
    padding: 0.5rem;
    transition: 0.5s;

    &:hover {
      border: 1px solid #0d6efd;
    }
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
`;

export const StyledList = styled.li`
  display: flex;
  margin: 0 5px;
`;

export const StyledH2 = styled.h1`
  font-weight: bold;
  color: #90a0d9;
`;
