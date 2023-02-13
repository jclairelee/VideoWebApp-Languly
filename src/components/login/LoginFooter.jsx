import React from "react";
import MainButton from "../../shared/components/MainButton";
import NaviInfo from "../../shared/components/NaviInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Enter correct e-mail address and password should contains between 6 and 12 characters";
};

const getFormValidMessage = () => {
  return "Press to log in!";
};

const LoginFooter = ({ loginHandler, isFormValid }) => {
  const navigate = useNavigate();

  const naviToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <MainButton
            label="Log in"
            additionalStyles={{ marginTop: "1rem", marginBottom: "0.5rem" }}
            disabled={!isFormValid}
            onClick={loginHandler}
          />
        </div>
      </Tooltip>
      <NaviInfo
        text="Need an account? "
        naviText="Create An Account"
        additionalStyles={{ marginTop: "5px", fontSize: "1rem" }}
        naviHandler={naviToSignup}
      />
    </>
  );
};

export default LoginFooter;
