import io from "socket.io-client";

let socket = null;

export const connectSocket = (userInfo) => {
  const jwtToken = userInfo.token;
  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    const socketID = socket.id;
  });
};
