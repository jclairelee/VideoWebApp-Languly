import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./NavBar.scss";
import { logout } from "../../shared/logout";

export default function NavBar({ name }) {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };
  const signupHandler = () => {
    navigate("/signup");
  };
  return (
    <nav className="nav">
      <a href="/home" className="nav__logo">
        <span className="nav__logo languly">LANGULY</span>
      </a>
      <ul className="nav__menu">
        <Link to="/home" className="nav__link">
          <li className="nav__item">Home</li>
        </Link>

        <a href="#" className="nav__link">
          <li className="nav__item">About</li>
        </a>

        <Link to="#" className="nav__link">
          <li className="nav__item">Users</li>
        </Link>

        <a href="#" className="nav__link">
          <li className="nav__item">Resources</li>
        </a>
      </ul>

      {name && name ? (
        <div className="nav__btn">
          <Button variant="outlined" onClick={logout}>
            Log out
          </Button>
        </div>
      ) : (
        <div className="nav__btn">
          <Button variant="outlined" onClick={loginHandler}>
            Log in
          </Button>
          <Button variant="outlined" onClick={signupHandler}>
            Sign up
          </Button>
        </div>
      )}
    </nav>
  );
}
