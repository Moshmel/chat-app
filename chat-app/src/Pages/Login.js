import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fade from 'react-reveal/Fade';

import storageService from '../services/storage-service';
export default ({ setNickname }) => {
  const [text, setText] = useState("");
  const handleClick = () => {
    if (text) {
      storageService.saveToStorage('nickname',text);
      setNickname(text);
    }
  };
  return (
    <section className="login">
      <div className="login-wrapper">
      <Fade left>

      
     
      <div className="login-content">
        <div className="logo-container">
          <img src="https://res.cloudinary.com/explority/image/upload/v1583255780/chat-logo_uebdby.png"/>
        </div>
        <h1>Chat-App</h1>
        <h2> Please enter a Nickname</h2>
        <div className="text-field-container">
          <TextField
            id="standard-basic"
            label="Standard"
            width={2}
            onChange={e => setText(e.target.value)}
            value={text}
            />{" "}
          <div className="btn-container">

          <Button
            variant="outlined"
            color="primary"
            onClick={handleClick}
            >
            Go
          </Button>
            </div>
        </div>
      </div>
      </Fade>
      <div className="main-img-container">
        <img src="https://res.cloudinary.com/explority/image/upload/v1583346573/sideline-phone-2_v1pany.png"/>
      </div>
            </div>
    </section>
  );
};
