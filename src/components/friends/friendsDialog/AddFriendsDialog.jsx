import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import { validateEmail } from "../../../shared/vaildation";
import InputandLabel from "../../../shared/components/InputandLabel";
import MainButton from "../../../shared/components/MainButton";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsActions";

const AddFriendDialog = ({
  email,
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [sendeeEmail, setSendeeEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    sendFriendInvitation(
      {
        targetEmailAddress: email,
      },
      handleCloseDialog
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setSendeeEmail("");
  };

  useEffect(() => {
    setIsFormValid(validateEmail(sendeeEmail));
  }, [handleSendInvitation]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputandLabel
            label="Email"
            type="text"
            value={email}
            setValue={setSendeeEmail}
            default={email}
            placeholder="Enter email address"
          />
        </DialogContent>
        <DialogActions>
          <MainButton
            onClick={handleSendInvitation}
            // disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
