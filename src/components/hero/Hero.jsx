import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";

export default function Hero({ name }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    name && name ? navigate("/dashboard") : navigate("/signup");
  };

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__left">
          <div className="hero__leftImg" />
        </div>
        <div className="hero__right">
          <div
            style={{ display: "flex" }}
            id={name && name ? "showGreeting" : "hideGreeting"}
          >
            <h2 style={{ color: "white" }}>Hi, </h2>
            <h2
              className="text"
              style={{ display: "flex", paddingLeft: "0.5rem" }}
            >
              {name}
            </h2>
          </div>

          <h1 className="hero__right__title">Practice with Languly</h1>
          <h5 className="hero__right__text">
            Accelerate your learning by having a real conversation with real
            people
          </h5>
          <button
            onClick={(e) => {
              clickHandler(e);
            }}
            className="hero__right__btn"
          >
            Start Coversation
          </button>
        </div>
      </div>
    </section>
  );
}
