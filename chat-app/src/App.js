import React, { useState, useEffect } from "react";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import storageService from './services/storage-service';
import "./App.css";

function App() {
  const [nickname, setNickname] = useState("");

  useEffect(()=>{
  const nick=storageService.loadFromStorage('nickname');
  if(nick){setNickname(nick);}
  },[])
  return (
    <div className="app">
     
      {!nickname && <Login setNickname={setNickname} />}
      {nickname && <Chat nickname={nickname}/>}
    
    </div>
  );
}

export default App;
