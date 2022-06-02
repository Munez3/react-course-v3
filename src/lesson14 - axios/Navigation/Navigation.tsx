import { Nav, Navbar, NavItem, StyledLink } from "./Navigation.style";

export default function Navigation(): React.ReactElement {
  return (
    <Navbar>
      <Nav>
        <NavItem home>
          <StyledLink to={"/"}>Strona Główna</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to={"/users"}>Użytkownicy</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to={"/user/add"}>Dodaj użytkownika</StyledLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
