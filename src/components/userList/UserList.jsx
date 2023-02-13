import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AddButton from "../friends/friendsDialog/AddFriendButton";
export default function UserList(props) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 400,
        bgcolor: "background.paper",
        marginTop: "8rem",
      }}
    >
      {props.props.map((user) => {
        return (
          <>
            <ListItem key={user._id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="firstname initial"
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                key={user._id}
                primary={user.username}
                secondary={
                  <div
                    className="userCard__content"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <span>
                      native speaker in <b>{user.targetLanguage} </b>
                    </span>
                    <span>
                      is learning <b>{user.nativeLanguage}</b>
                    </span>
                    <AddButton />
                  </div>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}
