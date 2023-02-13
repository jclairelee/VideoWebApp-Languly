import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../shared/vaildation";
import { getActions } from "../../store/actions/authActions";
import AuthContainer from "../../shared/components/AuthContainer";
import LoginInput from "../../components/login/LoginInput";
import LoginHeader from "../../components/login/LoginHeader";
import LoginFooter from "../../components/login/LoginFooter";
const LoginPage = ({ login }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLogin({ email, password }));
  }, [email, password, setIsFormValid]);

  const loginHandler = () => {
    const userInfo = {
      email,
      password,
    };
    login(userInfo, navigate);
  };
  return (
    <section className="login">
      <div className="login-container">
        <div
          className="login__left"
          style={{
            color: "white",
            background: "rgb(2, 0, 36)",
            background: `linear-gradient(
    rgba(2, 0, 36, 1) 0%,
    rgba(101, 108, 246, 1) 62%,
    rgba(139, 110, 246, 1) 100%,
    rgba(0, 136, 255, 1) 100%`,
          }}
        >
          <div className="login__left__contentBox">
            <h3 className="login__left__logo">Languly</h3>
            <span className="login__left__text">
              Connect with native speakers of your tarket language. Explore new
              cultures and Make friends from all around the world!
            </span>
          </div>
        </div>
        <AuthContainer sx={{ width: "30vw" }}>
          <LoginHeader />
          <LoginInput
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
          <LoginFooter isFormValid={isFormValid} loginHandler={loginHandler} />
        </AuthContainer>
      </div>
    </section>
  );
};

const mapToProp = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapToProp)(LoginPage);
