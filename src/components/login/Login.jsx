import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const validateLogin = (email, password) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  return isEmailValid && isPasswordValid;
};

const validateEmail = (email) => {
  const regularExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regularExpression.test(email);
};

const validatePassword = (password) => {
  if (password?.length > 6 && password?.length < 15) {
    return true;
  }
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLogin(email, password));
  }, [email, password, setIsFormValid]);

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log("successfully login !");
  };
  return (
    <section className="login">
      <div className="login-container">
        <div className="login-left">
          <h3 className="login-left__logo">Languly</h3>
          <span className="login-left__text">
            Practice languages with native speakers, Explore new cultures and
            Make friends from all around the world!
          </span>
        </div>
        <div className="login-right">
          <form>
            <div className="login-right__formBox">
              <input
                type="text"
                placeholder="Email"
                autoComplete="off"
                className="login-right__input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                label="password"
                placeholder="Password"
                className="login-right__input"
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                disabled={!isFormValid}
                onClick={(e) => loginHandler(e)}
                className="login-right__btn"
              >
                Log In
              </button>
              <span className="login-right__forgot">Forgot Password?</span>
              <Link to="/signup">
                <button className="login-right__forgot__create">
                  Create a New Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
