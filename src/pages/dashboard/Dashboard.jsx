import React from "react";
import "./Dashboard.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { connectSocket } from "../../components/socketClient/socketClient";
import MiddleDashboard from "../../components/dashComponents/middleDashborad/MiddleDashboard";
import DashboardSideBar from "../../components/dashComponents/dashboardSideBar/DashboardSideBar";

function Dashboard({ setUserInfo }) {
  const [allUserData, setAllUserData] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      axios
        .get(`http://localhost:5002/api/users`)
        .then((res) => {
          setAllUserData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      return allUserData;
    };
    getUsers();
  }, []);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");

    if (!userInfo) {
      return;
    } else {
      setUserInfo(JSON.parse(userInfo));
      connectSocket(JSON.parse(userInfo));
    }
  }, []);

  const { email, username, targetLanguage, nativeLanguage, token } = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <div clasName="dashboardBox">
        <div className="dashboard">
          <DashboardSideBar />
          <MiddleDashboard
            name={username && username}
            learning={targetLanguage && targetLanguage}
            native={nativeLanguage}
          />
        </div>
      </div>
    </>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
