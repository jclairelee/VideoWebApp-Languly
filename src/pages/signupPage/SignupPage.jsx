import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getActions } from "../../store/actions/authActions";
import { validateSignup } from "../../shared/vaildation";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthContainer from "../../shared/components/AuthContainer";
import SignupInput from "../../components/signup/SignupInput";
import SignupFooter from "../../components/signup/SignupFooter";
import SelectLanguage from "../../components/signup/SelectLanguage";

const language = [
  "Arabic",
  "Bengali",
  "Chinese-Mandarin",
  "English",
  "French",
  "German",
  "Hindi",
  "Indonesian",
  "Japanese",
  "Korean",
  "Portuguese",
  "Punjabi",
  "Russian",
  "Spanish",
  "Terkish",
];
function SignupPage({ signup }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");

  const signupHandler = () => {
    const userInfo = {
      email,
      password,
      username,
      targetLanguage,
      nativeLanguage,
    };

    signup(userInfo, navigate);
  };

  useEffect(() => {
    setIsFormValid(
      validateSignup({
        email,
        username,
        password,
        targetLanguage,
        nativeLanguage,
      })
    );
  }, [
    email,
    username,
    password,
    targetLanguage,
    nativeLanguage,
    setIsFormValid,
  ]);

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
          <Typography
            variant="h4"
            sx={{
              marginBottom: 3,
              fontFamily: "Montserrat",
              fontWeight: "600",
              fontSize: "2.8rem",
              color: "#3a300c",
              textAlign: "center",
            }}
          >
            Registration
          </Typography>

          <SelectLanguage
            language={language}
            targetLanguage={targetLanguage}
            setTargetLanguage={setTargetLanguage}
            nativeLanguage={nativeLanguage}
            setNativeLanguage={setNativeLanguage}
          />
          <SignupInput
            email={email}
            setEmail={setEmail}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
          <SignupFooter
            signupHandler={signupHandler}
            isFormValid={isFormValid}
          />
        </AuthContainer>
      </div>
    </section>
  );
}

const mapActionsToProp = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProp)(SignupPage);
