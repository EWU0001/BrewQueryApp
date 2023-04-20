import { Nav, Navbar, NavLink } from "react-bootstrap";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import { ThemeSwitch } from './ThemeSwitch';
import './styling/Navbar.css'

export const NavBar = () => {
    const beerqueryicon = require("../img/beerqueryicon.png");
    return (
        <Navbar className="Navbar" collapseOnSelect expand="sm" variant="dark" sticky="top" >
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll" >
                <Nav className="Navlinks flex-grow-1 justify-content-center align-items-center" sticky="top">
                    <NavLink color="white" eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink color="white" eventKey="1" as={Link} to="/breweries">Craftbreweries</NavLink>
                    <a href="/" className="logo logo d-flex align-items-center justify-content-center" sticky="top">
                        <img alt="logo" src={beerqueryicon} width="60px" />
                    </a>
                    <NavLink color="white" eventKey="1" as={Link} to="/search">Search</NavLink>
                    <NavLink color="white" eventKey="1" as={Link} to="/contact">Account</NavLink>
                </Nav>
            </Navbar.Collapse>
            <ThemeSwitch />
        </Navbar>
    )
}