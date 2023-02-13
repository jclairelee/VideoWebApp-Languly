import React from "react";
import MainButton from "../../shared/components/MainButton";
import NaviInfo from "../../shared/components/NaviInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const SignupFooter = ({ isFormValid, signupHandler }) => {
  const navigate = useNavigate();

  const naviToLogin = () => {
    navigate("/login");
  };
  const getFormNotValidMessage = () => {
    return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 character.";
  };

  const getFormValidMessage = () => {
    return "Press to register!";
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <MainButton
            label="Sign up"
            additionalStyles={{ marginTop: "1rem", marginBottom: "0.5rem" }}
            disabled={!isFormValid}
            onClick={signupHandler}
          />
        </div>
      </Tooltip>
      <NaviInfo
        text=""
        naviText="Already have an account ?"
        additionalStyles={{ marginTop: "5px", fontSize: "1rem" }}
        naviHandler={naviToLogin}
      />
    </>
  );
};

export default SignupFooter;
