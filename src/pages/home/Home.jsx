import React, { useEffect, useState } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { connectSocket } from "../../components/socketClient/socketClient";
import NavBar from "../../components/navBar/NavBar";
import Hero from "../../components/hero/Hero";
import Flag from "../../components/flag/Flag";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import JoinUs from "../../components/joinUs/JoinUs";
import Users from "../../components/users/Users";

function Home({ setUserInfo }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    const userInfo = localStorage.getItem("user");

    if (!userInfo) {
      return;
    } else {
      setUser(JSON.parse(userInfo));
      setUserInfo(JSON.parse(userInfo));
      connectSocket(JSON.parse(userInfo));
    }
  }, []);

  return (
    <div className="mainPage">
      <NavBar name={user.username} />
      <Hero name={user.username} />
      <Flag />
      <About />
      <Users />
      <JoinUs />
      <Footer />
    </div>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Home);
