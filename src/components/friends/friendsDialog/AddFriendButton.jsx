import AddFriendDialog from "./AddFriendsDialog";
import React, { useState } from "react";
import MainButton from "../../../shared/components/MainButton";

const additionalStyles = {
  marginLeft: "5px",
  height: "30px",
  background: "#5a5fdee3",
};

const AddFriendButton = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <MainButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
        email={props.email}
      />
    </>
  );
};

export default AddFriendButton;
