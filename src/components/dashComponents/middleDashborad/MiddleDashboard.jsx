import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./MiddleDashboard.scss";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import onlineG from "../../../assets/image/onlineGrey.jpg";
import RightDashboard from "../rightDashboard/RightDashboard";
import CallHistory from "../../callHistory/CallHistory";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Overlay from "../../modalEffect/Overlay";
import Modal from "../../modalEffect/Modal";

export default function MiddleDashboard({ name, learning, native }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <article className="mainDash__content">
      <div className="mainDash__content__wrapper">
        <h1 className="mainDash__title">Dashboard</h1>
        <div className="mainDash__msg mainDash__msg__wrapper">
          <div className="mainDash__msg__content">
            <h5 className="mainDash__msg__title">Welcome back, {name}</h5>
            <div className="mainDash__msg">
              <span className="mainDash__msg__text">
                Exchange your language skill with native speakers of your target
                language. Find your language partner and practice.
              </span>
            </div>
            <div className="mainDash__btns">
              <button
                className="mainDash__btns"
                onClick={() => {
                  navigate("/call");
                }}
              >
                Match partner
              </button>
            </div>
          </div>
          <div className="mainDash__videoChat">
            <img
              src={onlineG}
              alt="drawing"
              style={{ width: "190px", paddingTop: "35px" }}
            />
          </div>
        </div>

        <div className="mainDash__card">
          <div className="mainDash__cardTest">
            <h5 className="mainDash__card__title">Test - Unit 1</h5>
            <span className="mainDash__card__text">
              Modal verbs of probability: Past
            </span>
            <div style={{ height: "100%" }}>
              <span className="mainDash__card__text">
                Deadline Dec 29, 2022
              </span>
              <div
                className="mainDash__card__arrow"
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "right",
                  marginRight: "1rem",
                }}
              >
                <ArrowCircleRightIcon />
              </div>
            </div>
          </div>
          <div className="mainDash__cardTest--small">
            <RestaurantIcon />
            <h5 className="mainDash__card__title--small">Food</h5>
            <span className="mainDash__card__text--small">
              Explore food related idioms and expressions.
            </span>
          </div>
          <div className="mainDash__cardTest--small">
            <PodcastsIcon />
            <h5 className="mainDash__card__title--small">Podcast</h5>
            <span className="mainDash__card__text--small">
              Uncovering land theft in australia. Hosted by Angie Nicol
            </span>
          </div>
        </div>
        <CallHistory open={openModal} />
        <AnimatePresence>
          {open && (
            <Overlay close={closeModal}>
              <Modal close={closeModal} />
            </Overlay>
          )}
        </AnimatePresence>
      </div>
      <RightDashboard name={name} learning={learning} native={native} />
    </article>
  );
}
