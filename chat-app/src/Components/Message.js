import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import React, { useEffect, useRef } from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

const Messages = ({ messages }) => {
  
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(scrollToBottom, [messages]);
  return (
    <section className="messages">
    <List>
      {messages.flatMap((message, index) => [
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <Avatar alt="avatar" src={`https://ui-avatars.com/api/?name=${message.Username}`} />
          </ListItemAvatar>
          <ListItemText primary={message.Username} secondary={message.Text} />
        </ListItem>,
        <Divider component="li" key={"divider-" + index} variant="inset" />
      ])}
      <div ref={messagesEndRef} />
    </List>
      </section>
  );
};

export default Messages;
