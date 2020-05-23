import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./Footer.css";

const Footer = () => {
  var history = useHistory();

  var refreshPage = () => {
    history.push("/");
    window.scrollTo(0, 0);
  };
  var travel = () => {
    history.push("/travel");
    window.scrollTo(0, 0);
  };
  var phinisi = () => {
    history.push("/phinisi");
    window.scrollTo(0, 0);
  };
  var collaboration = () => {
    history.push("/collaboration");
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <div className="footer-web">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ marginTop: "100px" }}
        >
          <div className="container">
            <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
              <h3
                className="mr-3"
                style={{ color: "#7B8488", display: "inline" }}
              >
                <a
                  style={{ color: "#7B8488", cursor: "pointer" }}
                  target="_blank"
                  href="https://www.youtube.com/channel/UCvIVcgltlt0D_y0VLlveWGQ"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </h3>
              <h3
                className="mr-3"
                style={{ color: "#7B8488", display: "inline" }}
              >
                <a
                  href="https://www.instagram.com/backpackersopan/"
                  style={{ color: "#7B8488", cursor: "pointer" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </h3>
              <ul className="navbar-nav ml-auto text-center">
                <NavLink
                  onClick={refreshPage}
                  style={{
                    fontSize: "13px",
                    fontWeight: "bolder",
                    cursor: "pointer",
                  }}
                >
                  HOME
                </NavLink>

                <li className="nav-item">
                  {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      nav
                      caret
                      style={{ fontSize: "13px", fontWeight: "bolder" }}
                    >
                      PHINISI
                    </DropdownToggle>
                    <DropdownMenu
                      right
                      style={{ position: "absolute", top: "-100px" }}
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
                  </UncontrolledDropdown> */}
                  <NavLink
                    onClick={phinisi}
                    style={{
                      fontSize: "13px",
                      fontWeight: "bolder",
                      cursor: "pointer",
                    }}
                  >
                    PHINISI
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={travel}
                    style={{
                      fontSize: "13px",
                      fontWeight: "bolder",
                      cursor: "pointer",
                    }}
                  >
                    TRAVEL
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
              <ul className="navbar-nav mr-auto text-center">
                <li className="nav-item">
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <NavLink style={{ fontSize: "13px", fontWeight: "bolder" }}>
                      ABOUT
                    </NavLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={collaboration}
                    style={{
                      fontSize: "13px",
                      fontWeight: "bolder",
                      cursor: "pointer",
                    }}
                  >
                    COLLABORATION
                  </NavLink>
                </li>
              </ul>
              <h6
                className="email"
                style={{ color: "#7B8488", display: "inline" }}
              >
                baginda13srg@gmail.com
              </h6>
            </div>
          </div>
        </nav>
      </div>

      <div
        style={{
          backgroundColor: "#0E1E24",
          height: "100px",
          marginTop: "100px",
        }}
        className="footer-mobile"
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-8 dimobile" style={{ marginTop: "22px" }}>
              <h3
                className="mr-3"
                style={{ color: "#7B8488", display: "inline" }}
              >
                <a
                  style={{ color: "#7B8488", cursor: "pointer" }}
                  target="_blank"
                  href="https://www.youtube.com/channel/UCvIVcgltlt0D_y0VLlveWGQ"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </h3>
              <h3
                className="mr-3"
                style={{ color: "#7B8488", display: "inline" }}
              >
                <a
                  href="https://www.instagram.com/backpackersopan/"
                  style={{ color: "#7B8488", cursor: "pointer" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </h3>
            </div>
          </div>
          <div className="row justify-content-center text-center mt-2">
            <h6
              className="email"
              style={{ color: "#7B8488", display: "inline" }}
            >
              baginda13srg@gmail.com
            </h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
