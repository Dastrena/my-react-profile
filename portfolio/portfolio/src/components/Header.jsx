import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  background: ${(props) => props.theme.headerContainerBg};
  padding: 30px 0;
`;

const Nav = styled.nav`
  max-width: 1100px;
  margin: auto;
  background: ${(props) => props.theme.headerBg};
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  margin: 15px;
  color: ${(props) => props.theme.headerText};
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    text-shadow: 0px 0px 12px ${(props) => props.theme.accent};
    transform: scale(1.07);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  color: ${(props) => props.theme.headerText};
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Header = ({ toggleTheme, theme }) => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLinks>
          <NavLink to="/about">Про мене</NavLink>
          <NavLink to="/my-city">Моє місто</NavLink>
          <NavLink to="/my-future">Моє майбутнє</NavLink>
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </ThemeToggle>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
