import React from "react";
import AddFriendButton from "./friendsDialog/AddFriendButton";
import FriendsList from "./friendsList/FriendsList";
import PendingInvitation from "./pending/PendingInvitation";
import { styled } from "@mui/system";
export default function FriendsSideBar() {
  const MainContainer = styled("div")({
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136",
  });

  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsList />
      <h2>"Invitations"</h2>
      <PendingInvitation />
    </MainContainer>
  );
}
