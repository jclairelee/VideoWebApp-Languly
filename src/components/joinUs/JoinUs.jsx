import React from "react";
import "./JoinUs.scss";
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <section className="joinUs">
      <div className="joinUs__container">
        <h5 className="joinUs__title">Speak with Languly</h5>
        <span className="joinUs__text">
          Follow the natural process of language acquisition.
        </span>
        <br />
        <Link to="/signup">
          <button className="joinUs__btn">Join Us</button>
        </Link>
      </div>
    </section>
  );
}

export default JoinUs;
