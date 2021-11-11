/* eslint-disable */

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

// function Header({ setSearch }) {
//   function animation() {
//     var tabsNewAnim = $("#navbarSupportedContent");
//     var activeItemNewAnim = tabsNewAnim.find(".active");
//     var activeWidthNewAnimHeight = activeItemNewAnim.innnerHeight();
//     var activeWidthNewAnimWidth = activeItemNewAnim.innnerWidth();
//     var itemPosNewAnimTop = activeItemNewAnim.position();
//     var itemPosNewAnimLeft = activeItemNewAnim.position();
//     $(".hori-slector").css({
//       top: itemPosNewAnimTop.top + "px",
//       left: itemPosNewAnimLeft.left + "px",
//       height: activeWidthNewAnimHeight + "px",
//       width: activeWidthNewAnimWidth + "px",
//     });
//     $("#navbarsupportedContent").on("click", "li", function (e) {
//       $(this).addClass("active");
//       var activeWidthNewAnimHeight = $(this).innerHeight();
//       var activeWidthNewAnimWidth = $(this).innerWidth();
//       var itemPosNewAnimTop = $(this).position();
//       var itemPosNewAnimLeft = $(this).position();
//     });
//     $(".hori-selector").css({
//       top: itemPosNewAnimTop.top + "px",
//       left: itemPosNewAnimLeft.left + "px",
//       height: activeWidthNewAnimHeight + "px",
//       width: activeWidthNewAnimWidth + "px",
//     });
//   }

//   const dispatch = useDispatch();
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const history = useHistory();
//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-mainbg">
//       <NavLink className="navbar-brand navbar-logo" to="/" exact>
//         <NavLink className="navbar-logo" to="/">
//           <img src={Logo} />
//         </NavLink>
//       </NavLink>

//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportContent"
//         aria-controls="#navbarSupportContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <i
//           className="fas fa-bars
//       text-white"
//         />
//       </button>
//       {userInfo ? (
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             <div className="hori-selector">
//               <div className="left"></div>
//               <div className="right"></div>
//             </div>

//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/" exact>
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 HOME
//               </NavLink>
//             </li>
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/guest" exact>
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 GUEST
//               </NavLink>
//             </li>
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/about" exact>
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 ABOUT
//               </NavLink>
//             </li>
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/contact_us" exact>
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 CONTACT
//               </NavLink>
//             </li>

//             <li className="nav-item active">
//               <NavLink to="/user" className="nav-link">
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 PROFILE
//               </NavLink>
//             </li>

//             <li className="nav-item active">
//               <NavLink
//                 to="/account"
//                 className="nav-link"
//                 onClick={logoutHandler}
//               >
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 LOGOUT
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       ) : (
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             <div className="hori-selector">
//               <div className="left"></div>
//               <div className="right"></div>
//             </div>

//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/" exact>
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 HOME
//               </NavLink>
//             </li>
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/guest" exact>
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 GUEST
//               </NavLink>
//             </li>
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/about" exact>
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 ABOUT
//               </NavLink>
//             </li>
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/contact_us" exact>
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 CONTACT
//               </NavLink>
//             </li>
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/account" exact>
//                 <i
//                   className="fas
//               fa-techometer-alt"
//                 ></i>{" "}
//                 LOGIN
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>

//   );
// }

// export default Header;

const Header = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink class="navbar-brand" to="/">
        <img src={Logo} />
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
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
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/guest" exact>
                GUEST
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact_us" exact>
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user" exact>
                PROFILE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/logout"
                exact
                onClick={logoutHandler}
              >
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
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/guest" exact>
                GUEST
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact_us" exact>
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/account" exact>
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Header;
