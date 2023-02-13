import React from "react";
import { Typography } from "@mui/material";

const LoginHeader = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Montserrat",
          fontWeight: "600",
          fontSize: "2.8rem",
          color: "#3a300c",
          marginBottom: 3,
          textAlign: "center",
        }}
      >
        Log in
      </Typography>
    </>
  );
};

export default LoginHeader;
