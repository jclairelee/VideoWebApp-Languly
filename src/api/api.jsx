import axios from "axios";
import { logout } from "../shared/logout";

const api = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 6000,
});

api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem("user");

    if (userInfo) {
      const token = JSON.parse(userInfo).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const login = async (data) => {
  try {
    return await api.post("auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const signup = async (data) => {
  try {
    return await api.post("auth/signup", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// secure routes
export const sendFriendInvitation = async (data) => {
  try {
    return await api.post("/friend-invitation/invite", data);
  } catch (exception) {
    checkResp(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await api.post("/friend-invitation/accept", data);
  } catch (exception) {
    checkResp(exception);
    return {
      error: true,
      exception,
    };
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await api.post("/friend-invitation/reject", data);
  } catch (exception) {
    checkResp(exception);
    return {
      error: true,
      exception,
    };
  }
};

const checkResp = (exception) => {
  const resp = exception?.resp?.status;

  if (resp) {
    (resp === 401 || resp === 403) && logout();
  }
};
