import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Errorpage = () => {
  return (
    <div>
      <div class="hit-the-floor">404</div>

      <NavLink to="/">HOMEPAGE </NavLink>
    </div>
  );
};

export default Errorpage;
