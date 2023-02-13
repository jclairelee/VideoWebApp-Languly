import React from "react";
import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
const MainButton = () => {
  return (
    <Button
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865F2",
      }}
    >
      <PeopleIcon />
    </Button>
  );
};

export default MainButton;
