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
                <Link to="/">
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    HOME
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/phinisi">
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    PHINISI
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/travel">
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    TRAVEL
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about">
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    ABOUT ME
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/tips">
                  <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    TIPS
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">
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
