import React from "react";
import { NavLink } from "react-router-dom";
import {
  DivFlex,
  StyledUl,
  StyledList,
  StyledH2,
  HeaderStyled,
} from "../styles/Header";

const Header = () => {
  return (
    <HeaderStyled>
      <DivFlex>
        <StyledH2>JS.</StyledH2>
        <div>
          <nav>
            <StyledUl>
              <StyledList>
                <NavLink className="nav-link" to="/">
                  home
                </NavLink>
              </StyledList>
              <StyledList>
                <NavLink className="nav-link" to="projects" end>
                  projects
                </NavLink>
              </StyledList>
              <StyledList>
                <NavLink className="nav-link" to="skill">
                  skills
                </NavLink>
              </StyledList>
              <StyledList>
                <NavLink className="nav-link" to="contact">
                  contact
                </NavLink>
              </StyledList>
            </StyledUl>
          </nav>
        </div>
      </DivFlex>
    </HeaderStyled>
  );
};

export default Header;
