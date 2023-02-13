import React from "react";
import "./Call.scss";
import { useState } from "react";
import { IconButton } from "@material-ui/core";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";
import VideoButtons from "../../components/videoButtons/VideoButtons";

function Call() {
  const [display, setDisplay] = useState("none");

  return (
    <section className="call">
      <div className={display == "none" ? "call-sideBar" : "call-sideBar--sm"}>
        <IconButton
          sx={{ backgroundColor: "#1c2229" }}
          variant="contained"
          color="primary"
        >
          <VideocamOffRoundedIcon
            sx={{
              width: "2rem",
              fill: "white",
              paddingLeft: "0.5rem",
              height: "4rem",
            }}
          />
        </IconButton>
        <IconButton
          sx={{ backgroundColor: "#1c2229" }}
          variant="contained"
          color="primary"
        >
          <QuestionAnswerRoundedIcon
            sx={{
              width: "2rem",
              fill: "white",
              paddingLeft: "0.5rem",
              height: "4rem",
            }}
          />
        </IconButton>
        <IconButton
          sx={{ backgroundColor: "#1c2229" }}
          variant="contained"
          color="primary"
        >
          <NotificationsRoundedIcon
            sx={{
              width: "2rem",
              fill: "white",
              paddingLeft: "0.5rem",
              height: "4rem",
            }}
          />
        </IconButton>
        <IconButton
          sx={{ backgroundColor: "#1c2229" }}
          variant="contained"
          color="primary"
        >
          <PeopleRoundedIcon
            sx={{
              width: "2rem",
              fill: "white",
              paddingLeft: "0.5rem",
              height: "4rem",
            }}
          />
        </IconButton>
        <IconButton
          sx={{ backgroundColor: "#1c2229" }}
          variant="contained"
          color="primary"
        >
          <SettingsRoundedIcon
            sx={{
              width: "2rem",
              fill: "white",
              paddingLeft: "0.5rem",
              height: "4rem",
            }}
          />
        </IconButton>
      </div>
      <VideoButtons />
    </section>
  );
}

export default Call;
