import React from "react";
import "./Flag.scss";
import russia from "../../assets/flags/russia.webp";
import france from "../../assets/flags/france.png";
import german from "../../assets/flags/german.png";
import india from "../../assets/flags/india.png";
import korea from "../../assets/flags/korea.webp";
import spain from "../../assets/flags/spain.png";
import china from "../../assets/flags/china.png";
import punjab from "../../assets/flags/punjabi.png";
import england from "../../assets/flags/england.png";
import canada from "../../assets/flags/canada.png";
import usa from "../../assets/flags/usa.png";
import taiwan from "../../assets/flags/taiwan.png";
import turkey from "../../assets/flags/turkey.png";
import portugal from "../../assets/flags/portugal.png";
import bangladesh from "../../assets/flags/bangladesh.jpeg";
import japan from "../../assets/flags/japan.webp";
import indonesia from "../../assets/flags/indonesia.png";
import pakistan from "../../assets/flags/pakistan.png";

export default function Flag() {
  return (
    <section className="flag">
      <div className="flag__content">
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={canada}
              alt="canada flag"
            />
          </a>
        </div>

        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={turkey}
              alt="turkey flag"
            />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={portugal}
              alt="portugal flag"
            />
          </a>
        </div>

        <div className="flag__content__country">
          <a href="#">
            <img className="flag__content__flag" src={china} alt="china flag" />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={england}
              alt="england flag"
            />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={france}
              alt="france flag"
            />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img className="flag__content__flag" src={india} alt="india flag" />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={russia}
              alt="russia flag"
            />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={punjab}
              alt="punjab flag"
            />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img className="flag__content__flag" src={usa} alt="usa flag" />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img className="flag__content__flag" src={spain} alt="spain flag" />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img className="flag__content__flag" src={korea} alt="korea flag" />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={german}
              alt="german flag"
            />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={taiwan}
              alt="taiwan flag"
            />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={bangladesh}
              alt="bangladesh flag"
            />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img className="flag__content__flag" src={japan} alt="japan flag" />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={indonesia}
              alt="indonesia flag"
            />
          </a>
        </div>
        <div className="flag__content__country">
          <a href="#">
            <img
              className="flag__content__flag"
              src={pakistan}
              alt="pakistan flag"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
