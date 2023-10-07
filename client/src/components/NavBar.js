import { Nav, Navbar, NavLink } from "react-bootstrap";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import { ThemeSwitch } from './ThemeSwitch';
import './styling/Navbar.css'
import Tooltip from "@mui/material/Tooltip";

export const NavBar = () => {
    const beerqueryicon = require("../img/beerqueryicon.png");
    return (
        <Navbar className="Navbar" collapseOnSelect expand="sm" variant="dark" sticky="top" >
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Tooltip title="BrewQuery">
                <a href="/BrewQueryApp" className="logo logo d-flex align-items-center justify-content-center" style={{ paddingLeft: "1%" }} sticky="top">
                    <img alt="logo" src={beerqueryicon} width="60px" />
                </a>
            </Tooltip>
            <Navbar.Collapse id="navbarScroll" >
                <Nav className="Navlinks flex-grow-1" sticky="top">
                    <NavLink color="white" eventKey="1" as={Link} to="/BrewQueryApp">Home</NavLink>
                    <NavLink color="white" eventKey="1" as={Link} to="/BrewQueryApp/breweries">Craftbreweries</NavLink>
                    <NavLink color="white" eventKey="1" as={Link} to="/BrewQueryApp/search">Search</NavLink>
                    <NavLink color="white" eventKey="1" as={Link} to="/BrewQueryApp/logIn">Account</NavLink>
                </Nav>
                <div style={{ float: 'right',marginRight:'1%' }}>
                    <ThemeSwitch />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}