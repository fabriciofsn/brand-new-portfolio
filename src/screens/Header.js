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

                <a
                  className="linkExternal"
                  href="https://drive.google.com/file/
                  d/1aoQRjS2qs5_O-h
                  15cEk-7fAKmPg8kU13
                  /view?usp=sharing"
                >
                  Download CV
                </a>
              </StyledList>
            </StyledUl>
          </nav>
        </div>
      </DivFlex>
    </HeaderStyled>
  );
};

export default Header;
