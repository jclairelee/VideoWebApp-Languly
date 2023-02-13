import React from "react";
import { styled } from "@mui/system";
import MainButton from "./MainButton";

const MainContainer = styled("div")({
  width: "75px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "top",
  backgroundColor: "#202225",
});

function MainSideBar() {
  return (
    <MainContainer>
      <MainButton />
    </MainContainer>
  );
}

export default MainSideBar;
