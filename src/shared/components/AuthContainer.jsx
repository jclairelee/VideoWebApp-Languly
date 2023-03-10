import React, { useRef, forwardRef } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const AuthContainer = (props, ref) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: "40rem",
          bgcolor: "white",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthContainer;
