import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <Navbar light expand="md">
        <div className="container">
          <Link to="/"><NavbarBrand className="brand">
            BAGINDA <span style={{color:"#29BAED"}}>SITTO</span>
          </NavbarBrand></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" style={{ fontSize: "13px", fontWeight: "bolder" }}>
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ fontSize: "13px", fontWeight: "bolder" }}
                >
                  GALERIES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ fontSize: "13px", fontWeight: "bolder" }}
                >
                  BLOGS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ fontSize: "13px", fontWeight: "bolder" }}
                >
                  CATEGORIES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  style={{ fontSize: "13px", fontWeight: "bolder" }}
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
