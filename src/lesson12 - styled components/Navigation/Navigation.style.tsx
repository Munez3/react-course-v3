import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  display: block;
`;

export const Nav = styled.ul`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
`;

export const NavItem = styled.li<{ home?: boolean }>`
  margin: 0 10px;
  font-weight: ${(props) => (props.home ? 700 : 400)};
`;

export const StyledLink = styled(Link)`
  padding: 5px 10px;
  text-decoration: none;
  color: #222;

  &:hover {
    color: #777;
  }
`;
