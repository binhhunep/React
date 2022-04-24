import React from "react";
import "../../styles/Nav.scss";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";

class nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/ToDo" activeClassName="active">
          ToDo
        </NavLink>
        <NavLink to="/About" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/Contract" activeClassName="active">
          Login
        </NavLink>
      </div>
    );
  }
}
export default nav;
