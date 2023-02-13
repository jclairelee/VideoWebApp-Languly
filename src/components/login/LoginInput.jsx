import React from "react";
import InputandLabel from "../../shared/components/InputandLabel";

const LoginInput = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputandLabel
        value={email}
        setValue={setEmail}
        label="E-mail"
        type="text"
        placeholder="Enter e-mail address"
        autoComplete="on"
      />
      <InputandLabel
        autocomplete="off"
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default LoginInput;
