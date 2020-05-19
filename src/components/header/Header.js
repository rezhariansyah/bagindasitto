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
} from "reactstrap";
import "./Header.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

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
                      <DropdownItem tag={Link} to="/panrita">
                        Panrita
                      </DropdownItem>
                      <DropdownItem tag={Link} to="/tamparang">
                        Tamparang
                      </DropdownItem>
                      <DropdownItem tag={Link} to="/lopi">
                        Lopi
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    style={{ fontSize: "13px", fontWeight: "bolder" }}
                  >
                    TRAVEL
                  </DropdownToggle>
                  <DropdownMenu
                    right
                    style={{ position: "absolute", right: "50%" }}
                  >
                    <DropdownItem tag={Link} to="/bali">
                      Bali
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/sulawesi">
                      Sulawesi
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/rajaampat">
                      Raja Ampat
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/sumba">
                      Sumba
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/flores">
                      Flores
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/komodo">
                      Komodo
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
