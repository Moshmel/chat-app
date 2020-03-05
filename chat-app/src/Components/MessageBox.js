
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
export default  ({ onSendMessage}) => {
    const [message, setMessage] = useState("");
    const handleSendMessage=()=>{
      if(message.length!==null)
      {
        onSendMessage(message);
        setMessage("");
      }
    }
    return (
      <section className="message-box">

      <TextField
        fullWidth
        label="Message"
        margin="normal"
        multiline
        onChange={evt => setMessage(evt.target.value)}
        onKeyDown={evt => {
          if (evt.key === "Enter") {
            evt.preventDefault();
handleSendMessage();
          }
        }}
        rows="1"
        value={message}
        />
        <div className="send-msg-container">
        <Button variant="outlined" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
        </div>
        </section>
    );
  };
  
