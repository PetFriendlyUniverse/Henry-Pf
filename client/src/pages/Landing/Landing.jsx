import React from "react";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div>
      Landing
      <NavLink to="/Shop" replace>
        <button>Shop</button>
      </NavLink>
      <NavLink to="/Health" replace>
        <button>Health</button>
      </NavLink>
    </div>
  );
}

export default Landing;
