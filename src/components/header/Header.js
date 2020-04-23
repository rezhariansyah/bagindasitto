import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./Header.css";

const Example = (props) => {
  const [isOpen, setIsOpen, dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="barbar">
      <Navbar light expand="md">
        <div className="container">
          <Link to="/">
            <NavbarBrand className="brand">
              BAGINDA <span style={{ color: "#29BAED" }}>SITTO</span>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    HOME
                  </NavLink>
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link to="/phinisi">
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    PHINISI
                  </NavLink>
                </Link>
              </NavItem> */}
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      nav
                      caret
                      style={{ fontSize: "13px", fontWeight: "bolder" }}
                    >
                      PHINISI
                    </DropdownToggle>
                    <DropdownMenu
                      right
                      style={{ position: "absolute", right: "50%" }}
                    >
                      <DropdownItem tag={Link} to="/panrita">Panrita</DropdownItem>
                      <DropdownItem tag={Link} to="/tamparang">Tamparang</DropdownItem>
                      <DropdownItem tag={Link} to="/lopi">Lopi</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
              <NavItem>
                <Link to="/travel" style={{ textDecoration: "none" }}>
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    TRAVEL
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    ABOUT ME
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/tips" style={{ textDecoration: "none" }}>
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    SUSTAINABLE
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    CONTACT
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Example;
