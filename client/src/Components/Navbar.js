import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, NavLink } from "react-router-dom";
import { logout } from "../actions/userActions";
import "./Navbar.css";
import Logo from "../images/logo.png";
import $ from "jquery";

function Header({ setSearch }) {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innnerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innnerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-slector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarsupportedContent").on("click", "li", function (e) {
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
    });
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  }

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <NavLink className="navbar-logo" to="/">
          <img src={Logo} />
        </NavLink>
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportContent"
        aria-controls="#navbarSupportContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i
          className="fas fa-bars
      text-white"
        />
      </button>
      {userInfo ? (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                HOME
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/guest" exact>
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                GUEST
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/about" exact>
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contact_us" exact>
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                CONTACT
              </NavLink>
            </li>

            <li className="nav-item active">
              <NavLink to="/user" className="nav-link">
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                PROFILE
              </NavLink>
            </li>

            {/* <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                {userInfo.name}
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink to="/user">My Profile</NavLink>
                </li>
                <li>
                  <NavLink
                    to="logout"
                    className="nav-link"
                    onClick={logoutHandler}
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </li> */}
            <li className="nav-item active">
              <NavLink
                to="/account"
                className="nav-link"
                onClick={logoutHandler}
              >
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                LOGOUT
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                HOME
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/guest" exact>
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                GUEST
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/about" exact>
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contact_us" exact>
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/account" exact>
                <i
                  className="fas
              fa-techometer-alt"
                ></i>{" "}
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>

    // <Navbar bg="warning" expand="lg">
    //   <Container>
    //     <NavLink className="navbar-logo" to="/">
    //       <img src={Logo} />
    //     </NavLink>

    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="m-auto"></Nav>
    //       {userInfo ? (
    //         <Nav className="navigation" variant="dark">
    //           <NavLink to="/">HOME</NavLink>
    //           <NavLink to="/guest">GUEST</NavLink>
    //           <NavLink to="/about">ABOUT</NavLink>
    //           <NavLink to="/contact_us">CONTACT</NavLink>
    //           <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
    //             <NavDropdown.Item to="/user">My Profile</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item onClick={logoutHandler}>
    //               LogOut
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       ) : (
    //         <Nav className="me-auto">
    //           <NavLink to="/">HOME</NavLink>
    //           <NavLink to="/guest">GUEST</NavLink>
    //           <NavLink to="/about">ABOUT</NavLink>
    //           <NavLink to="/contact_us">CONTACT</NavLink>
    //           <NavLink to="/account">LOGIN</NavLink>
    //         </Nav>
    //       )}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Header;
