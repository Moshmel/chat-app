import React, { useState, useEffect } from "react";
//cmp
import MessageBox from "../Components/MessageBox";
import Message from "../Components/Message";
import Loading from "../Components/Loading";
//service
import ApiSerivce from "../services/api-service";
import { useInterval } from "../services/custom-hooks/useInterval";
export default ({ nickname }) => {
  const [messages, setMessages] = useState();
  //init - getting first messages
  useEffect(() => {
    async function getMessages() {
      try {
        const res = await ApiSerivce.getMessages();
        setMessages(res.data.reverse());
      } catch (e) {
        console.log("error on getting messages", e);
      }
    }
    getMessages();
  }, []);
  //checkig for new messages
  useInterval(async () => {
    try {
     
      const res = await ApiSerivce.getMessages();
      //deleting all unnecessary messages
      const newMsgs = res.data.filter(
        el => el.Timestamp > messages[messages.length - 1].Timestamp
      );

      if (newMsgs.length > 0) {
        newMsgs.reverse();
        let temp = [...messages, ...newMsgs];
        setMessages(temp);
      }
    } catch (e) {
      console.log("error on update new messsage", e);
    }
  }, 7000);

  const onSendMessage = async text => {
    const data = { Username: nickname, Text: text, Timestamp: Date.now() };
    const res = await ApiSerivce.addMessage(data);
    data.ID = res.data;
    let temp = [...messages];
    temp.push(data);
    setMessages(temp);
  };

  return (
    <section className="chat">
      {messages ? (
        <div>
          {" "}
          <Message messages={messages} />
          <MessageBox onSendMessage={onSendMessage} />
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};
