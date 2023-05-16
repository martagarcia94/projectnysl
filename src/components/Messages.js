import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Template from "./Template";
import "./../assets/css/messages.css";
import { db } from "./../service/firebase";
import { onValue, ref, remove, set } from "firebase/database";
import firebase from "firebase/compat/app";

const Messages = () => {
    const currentUser = firebase.auth().currentUser;
    const { id } = useParams();
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
  
    useEffect(() => {
      readFromDatabase();
    }, []);
  
      const readFromDatabase = () => {
      const query = ref(db, "messages");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        const filteredMessages = filterMessages(data);
        const formattedMessages = formatMessages(filteredMessages);
        setMessages(formattedMessages);
      });
    };

    const deleteFromDatabase = (messageId) => {
      const dbRef = ref(db, `/messages/game-${id}/message-${messageId}`);
      remove(dbRef).then(() => console.log("Deleted"));
    };
  
    const addNewMessageToDatabase = (message) => {
      set(
        ref(db, `/messages/game-${id}/message-${Math.floor(Math.random() * 10)}`),
        message
      );
    };
  
    const handleMessageSubmit = () => {
      const message = {
        author: currentUser.multiFactor.user.email,
        text: inputValue,
        timestamp: Date.now(),
      };

    addNewMessageToDatabase(message);
    setInputValue("");
    };

    const filterMessages = (messages) => {
      return messages[`game-${id}`] ? messages[`game-${id}`] : [];
    };
  
    const formatMessages = (messages) => {
      const messagesKeys = Object.keys(messages);
      const formattedMessages = [];
      messagesKeys.forEach((messageKey) => {
        formattedMessages.push(messages[messageKey]);
      });
      return formattedMessages;
    };

  return (
<Template title="Messages">
      <div>
        <h1 className="messages__header">Messages</h1>

        <div className="messages__container">
          {messages.map((message, index) => (
            <div key={index}>
              <p>{message.text}</p>
              <p>{message.author}</p>
              <p>{message.timestamp}</p>
              <button onClick={() => deleteFromDatabase(index + 1)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <form className="messages__button" onSubmit={handleMessageSubmit}>
          <input
            className="messages__text"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </Template>
  );
};

export default Messages;