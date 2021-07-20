import { Avatar } from "@material-ui/core";
import React from "react";

import "./sidebarchat.styles.scss";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
