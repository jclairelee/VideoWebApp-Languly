import React, { useState } from "react";
import "./RightDashboard.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import lenny from "../../../assets/image/Lenny.avif";
import kate from "../../../assets/image/kate.avif";
import person1 from "../../../assets/image/person1.jpeg";
import person2 from "../../../assets/image/person2.jpeg";
import person3 from "../../../assets/image/person3.jpeg";
import person4 from "../../../assets/image/person4.jpeg";
import Avatar from "@mui/material/Avatar";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { motion } from "framer-motion";

function RightDashboard({ name, learning, native, open }) {
  const [isOpen, setToggle] = useState(false);
  const toggleB = () => {
    setToggle((isOpen) => !isOpen);
  };
  const temporaryObj = [
    {
      name: "Lenny",
      avarta: lenny,
    },
    {
      name: "Kate",
      avarta: kate,
    },
    {
      name: "Chris",
      avarta: person1,
    },
    {
      name: "Nancy",
      avarta: person4,
    },
    {
      name: "Sam",
      avarta: person3,
    },
    {
      name: "Jordan",
      avarta: person2,
    },
  ];

  return (
    <section className="sideDash">
      <div className="sideDash__myProfile">
        <div
          className="sideDash__myProfile__content"
          style={{ marginBottom: "1.25rem" }}
        >
          <div
            className="sideDash__myProfile__content__pic"
            style={{ margin: "1.25rem 0" }}
          >
            <Avatar sx={{ width: "6rem", height: "6rem" }} />
          </div>

          <div className="sideDash__myProfile__content__text">
            <h2 style={{ marginBottom: "0.5rem" }}>{name}</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RecordVoiceOverIcon sx={{ marginRight: "11px" }} />
              <p style={{ fontSize: "1.05rem" }}> {native}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BorderColorIcon sx={{ marginRight: "11px" }} />
              <p style={{ fontSize: "1.05rem" }}>{learning}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? "sideDash__wrapper--hide" : "sideDash__wrapper"}>
        {temporaryObj.map((fr) => {
          return (
            <>
              <motion.div
                className="invitationCard"
                onClick={open}
                whileHover={{ scale: 1.2 }}
                style={{ display: "flex" }}
              >
                <div className="sideDash__invitation">
                  <div className="sideDash__invitation--top">
                    <div className="sideDash__invitation__pic">
                      <button
                        className="sideDash__invitation__pic"
                        style={{ border: "none" }}
                        onClick={() => {
                          toggleB();
                        }}
                      >
                        <img
                          className="sideDash__invitation__pic"
                          src={`${fr.avarta}`}
                          alt="profile picture"
                        />
                      </button>
                    </div>
                    <div className="sideDash__invitation__detail">
                      <h5 className="sideDash__invitation__name">{fr.name}</h5>
                      <span
                        className={
                          isOpen
                            ? "sideDash__invitation__text--hide"
                            : "sideDash__invitation__text"
                        }
                      >
                        Friend Request
                      </span>

                      <button
                        className={
                          isOpen
                            ? "sideDash__invitation__btn--hide"
                            : "sideDash__invitation__btn"
                        }
                      >
                        Profile
                      </button>
                    </div>
                  </div>
                  <div className="sideDash__invitation__decision">
                    <CheckCircleIcon sx={{ fill: "#5a5fde", height: "3rem" }} />
                    <HighlightOffIcon sx={{ height: "3rem" }} />
                  </div>
                </div>
              </motion.div>
            </>
          );
        })}
      </div>
      {/* friends list */}
      <div
        className="sideDash__wrapper"
        style={{ width: "10vw", paddingBottom: "0" }}
      ></div>
    </section>
  );
}

export default RightDashboard;
