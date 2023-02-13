import React from "react";
import AddButton from "../friends/friendsDialog/AddFriendButton";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function Users() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getUsers = () => {
      axios
        .get(`http://localhost:5002/api/users`)
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      return userData;
    };
    getUsers();
  }, []);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "5rem",
          flexDirection: "column",
          marginTop: "8rem",
          marginBottom: "8rem",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          New Users
        </h2>
        <NavBar userData={userData} />

        <List
          sx={{
            bgcolor: "#4f92fb08",
            color: "#253445",
            borderRadius: "15px",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 0",
            gridTemplateColumns: "31% 31% 31%",
            width: "93%",
          }}
        >
          {userData.map((user) => {
            return (
              <>
                <ListItem key={user._id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    key={user._id}
                    primary={user.username}
                    secondary={
                      <div
                        className="userCard__content"
                        style={{
                          color: "#253445",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div style={{ display: "flex", margin: "16px 0rem" }}>
                          <RecordVoiceOverIcon
                            sx={{
                              marginRight: "10px",
                              fontSize: "1.2rem",
                            }}
                          />
                          <span style={{ marginRight: "15px" }}>
                            {user.nativeLanguage}
                          </span>
                          <BorderColorIcon
                            sx={{
                              marginRight: "10px",
                              fontSize: "1.2rem",
                            }}
                          />
                          <span>
                            {user.targetLanguage &&
                            user.targetLanguage === "chinese-mandarin"
                              ? "mandarin"
                              : user.targetLanguage}
                          </span>
                        </div>
                        <AddButton
                          email={user.email}
                          isDialogOpen={isDialogOpen}
                          closeDialogHandler={handleCloseAddFriendDialog}
                        />
                      </div>
                    }
                  />
                  <Divider variant="inset" component="li" />
                </ListItem>
              </>
            );
          })}
        </List>
      </div>
    </>
  );
}

export default Users;
