import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar-expand-lg pl-1 navbar navbar-dark bg-primary">
    <div className="navbar-brand">Note App</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact="true">
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link active" to="/about">
          Информация
        </NavLink>
      </li>
    </ul>
  </nav>
);
