import React, { useState, useEffect, useRef } from "react";
import ScreenShareRoundedIcon from "@mui/icons-material/ScreenShareRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import { IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "./VideoButtons.scss";
import sample from "../../assets/image/kate.avif";

export default function VideoButtons({ display }) {
  const navigate = useNavigate();
  const myVideo = useRef();
  const [clickScreen, setClickScreen] = useState(false);
  const [audio, setAudio] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        myVideo.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    getUserMedia();
  }, []);

  const click = () => {
    setClickScreen(!clickScreen);
    console.log(clickScreen);
  };
  const checkAudio = () => {
    setAudio(!audio);
  };
  const ChangeScreenSize = () => {
    setFullScreen(!fullScreen);
    console.log(fullScreen);
  };
  return (
    <>
      <div className="call-mainContent">
        <div className="call-mainContent__bottom">
          <div
            className={
              fullScreen === true ? "fullScreenUI__box" : "smallScreenUI__box"
            }
          >
            <img
              src={sample}
              alt="a grandpa talking"
              className={
                fullScreen === true
                  ? "fullScreenUI__partnerCam "
                  : "smallScreenUI__partnerCam"
              }
            />

            <video
              playsInline
              ref={myVideo}
              muted={audio}
              autoPlay
              className={
                fullScreen === true
                  ? "fullScreenUI__myCam"
                  : "smallScreenUI__myCam"
              }
              onClick={() => {
                click();
              }}
            />
          </div>

          <div className="call-mainContent__bottom__left__btnList">
            {/* 1st icon */}
            <div
              className="call-mainContent__bottom__left__btn"
              style={{
                borderRadius: "100%",
                backgroundColor: "#29384d",
                width: "3.25rem",
                height: "3.25rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                setCameraOn(!cameraOn);
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#29384d",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                variant="contained"
                color="primary"
              >
                {cameraOn === false ? (
                  <VideocamOffRoundedIcon
                    sx={{
                      fill: "white",
                      fontSize: "2rem",
                    }}
                  />
                ) : (
                  <VideocamIcon
                    sx={{
                      fill: "white",
                      fontSize: "2rem",
                    }}
                  />
                )}
              </IconButton>
            </div>

            {/* 2nd icon */}
            <div
              className="call-mainContent__bottom__left__btn"
              style={{
                borderRadius: "100%",
                backgroundColor: "#29384d",
                width: "3.25rem",
                height: "3.25rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                ChangeScreenSize();
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#29384d",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                variant="contained"
                color="primary"
              >
                {fullScreen === false ? (
                  <FullscreenIcon
                    sx={{
                      fill: "white",
                      transform: "rotate(360deg)",
                      fontSize: "2rem",
                    }}
                  />
                ) : (
                  <CloseFullscreenIcon
                    sx={{
                      fill: "white",
                      transform: "rotate(360deg)",
                      fontSize: "2rem",
                    }}
                  />
                )}
              </IconButton>
            </div>

            {/* 3rd icon */}
            <div
              className="call-mainContent__bottom__left__btn"
              onClick={() => {
                navigate("/dashboard");
              }}
              style={{
                borderRadius: "100%",
                backgroundColor: "#ef3c37",
                width: "4rem",
                height: "4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                curser: "pointer",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#ef3c37",
                  borderRadius: "50%",
                  width: "4rem",
                  height: "4rem",
                }}
                variant="contained"
                color="primary"
              >
                <PhoneRoundedIcon
                  sx={{
                    fill: "white",
                    fontSize: "2rem",
                  }}
                />
              </IconButton>
            </div>
            {/* 4th icon */}
            <div
              className="call-mainContent__bottom__left__btn"
              style={{
                borderRadius: "100%",
                backgroundColor: "#29384d",
                width: "3.25rem",
                height: "3.25rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                checkAudio();
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#29384d",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                variant="contained"
                color="primary"
              >
                {audio === false ? (
                  <MicOffRoundedIcon
                    sx={{
                      fill: "white",
                      fontSize: "2rem",
                    }}
                  />
                ) : (
                  <KeyboardVoiceRoundedIcon
                    sx={{
                      fill: "white",
                      transform: "rotate(360deg)",
                      fontSize: "2rem",
                    }}
                  />
                )}
              </IconButton>
            </div>
            {/* 5th icon */}
            <div
              className="call-mainContent__bottom__left__btn"
              style={{
                borderRadius: "100%",
                backgroundColor: "#29384d",
                width: "3.25rem",
                height: "3.25rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#29384d",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                variant="contained"
                color="primary"
              >
                <ScreenShareRoundedIcon
                  sx={{
                    fill: "white",

                    fontSize: "2rem",
                  }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
