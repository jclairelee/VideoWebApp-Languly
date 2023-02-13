import React from "react";
import InputandLabel from "../../shared/components/InputandLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useEffect } from "react";
import InputLabel from "@mui/material/inputLabel";

const SignupInput = (props) => {
  const { email, setEmail, username, setUsername, password, setPassword } =
    props;

  return (
    <>
      <InputandLabel
        value={email}
        setValue={setEmail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
        autoComplete="off"
      />
      <InputandLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter a username"
        autoComplete="off"
      />
      <InputandLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
        autoComplete="off"
      />
    </>
  );
};

export default SignupInput;
