import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
function Menu() {
  return (
    <div className="menu-wrapper">
      <Container>
        <Navbar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/servieces">Services</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/pages">pages</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Navbar>
      </Container>
    </div>
  );
}

export default Menu;
