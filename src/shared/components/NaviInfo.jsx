import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const NaviText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const NaviInfo = ({ text, naviText, additionalStyles, naviHandler }) => {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <NaviText onClick={naviHandler}>{naviText}</NaviText>
    </Typography>
  );
};

export default NaviInfo;
