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
        <StyledH2>FS.</StyledH2>
        <div>
          <nav>
            <StyledUl>
              <StyledList>
                <NavLink className="nav-link" to="/" end>
                  home
                </NavLink>
              </StyledList>
              <StyledList>
                <NavLink className="nav-link" to="projects">
                  projects
                </NavLink>
              </StyledList>
              <StyledList>
                <NavLink className="nav-link" to="skills">
                  skills
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
