import * as api from "../../api/api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_INFO: "AUTH.SET_USER_INFO",
};

export const getActions = (dispatch) => {
  return {
    login: (userInfo, navigate) => dispatch(login(userInfo, navigate)),
    signup: (userInfo, navigate) => dispatch(signup(userInfo, navigate)),
    setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
  };
};

const setUserInfo = (userInfo) => {
  return {
    type: authActions.SET_USER_INFO,
    userInfo,
  };
};

const login = (userInfo, navigate) => {
  return async (dispatch) => {
    const resp = await api.login(userInfo);
    if (resp.error) {
      dispatch(openAlertMessage(resp?.exception?.resp?.data));
    } else {
      const { userInfo } = resp?.data;
      localStorage.setItem("user", JSON.stringify(userInfo));
      dispatch(setUserInfo(userInfo));
      navigate("/dashboard");
    }
  };
};

const signup = (userInfo, navigate) => {
  return async (dispatch) => {
    const resp = await api.signup(userInfo);
    console.log(resp);
    if (resp.error) {
      dispatch(openAlertMessage(resp?.exception?.resp?.data));
    } else {
      const { userInfo } = resp?.data;
      localStorage.setItem("user", JSON.stringify(userInfo));
      dispatch(setUserInfo(userInfo));
      navigate("/dashboard");
    }
  };
};
