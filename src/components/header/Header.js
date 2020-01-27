import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Header.css";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/" className="brand">
            BAGINDA <span style={{color:"#29BAED"}}>SITTO</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" style={{ fontSize: "13px" }}>
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ fontSize: "13px" }}
                >
                  GALERIES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ fontSize: "13px" }}
                >
                  BLOGS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ fontSize: "13px" }}
                >
                  CATEGORIES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ fontSize: "13px" }}
                >
                  CONTACT
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Example;
