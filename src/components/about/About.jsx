import "./About.scss";
import clock from "../../assets/image/clock.png";
import mobile from "../../assets/image/mobile.png";
import searchPP from "../../assets/image/searchPP.png";
import React from "react";

function About() {
  return (
    <section className="about">
      {/* first box */}
      <div className="about__box">
        <div className="about__img__box">
          <img className="about__img" src={mobile} alt="phone icon" />
        </div>
        <div className="about__text">
          <h1
            className="about__text--thick
          "
          >
            Learn Through Real Conversation
          </h1>
          <span className="about__text--detail">
            Explore new culture and immerse in new lanuages with live broadcasts
            hosted by creators
          </span>
        </div>
      </div>
      {/* second box */}
      <div className="about__box">
        <div className="about__text">
          <h1 className="about__text--thick about__text--middle">
            Speak Anytime,
            <br /> Speak Anywhere.
          </h1>
          <span className="about__text--detail about__text--detailMiddle">
            Access 24 hours 365 days. Connect with people from all over the
            world at your conveniece.
          </span>
        </div>
        <div className="about__img__box about__img__box--middle">
          <img
            className="about__img about__img__box--middle"
            src={clock}
            alt="mobile icon"
          />
        </div>
      </div>
      {/* third box */}
      <div className="about__box">
        <div className="about__img__box">
          <img className="about__img" src={searchPP} alt="mobile icon" />
        </div>
        <div className="about__text">
          <h1 className="about__text--thick about__text--search">
            Search your Language Partner
          </h1>
          <span className="about__text--detail">
            Search for language exchange partners by native language, interests,
            and more.
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
