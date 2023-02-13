import React from "react";
import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from "@mui/icons-material/CallEnd";
import "./IncomingCall.scss";

function IncomingCall({ name, native, learning }) {
  return (
    <section className="incomingCall">
      <div className="incomingCall__top">
        <div className="incomingCall__top__text">
          <h3 className="incomingCall__top__text">Incoming Call</h3>
        </div>
        <div className="incomingCall__top__profile">
          <div className="incomingCall__top__avarta"></div>
          <span className="incomingCall__top__profile">Name: {name}</span>
          <span className="incomingCall__top__profile">
            Primary Language: {native}
          </span>
          <span className="incomingCall__top__profile">
            Target Language: {learning}
          </span>
        </div>
      </div>
      <div className="incomingCall__bottom">
        <CallIcon sx={{ width: "10rem", fontSize: "5rem" }} />
        <CallEndIcon sx={{ width: "10rem", fontSize: "5rem" }} />
      </div>
    </section>
  );
}

export default IncomingCall;
