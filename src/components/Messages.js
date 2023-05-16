import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Template from "./Template";
import "./../assets/css/messages.css";
import { db } from "./../service/firebase";
import { onValue, ref } from "firebase/database";

const Messages = () => {
    const { id } = useParams();
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
  
    useEffect(() => {
      const query = ref(db, "messages");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        const filteredMessages = filterMessages(data);
        const formattedMessages = formatMessages(filteredMessages);
        setMessages(formattedMessages);
      });
    }, []);

    const handleMessageSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        const newMessage = {
          id: Date.now(),
          text: inputValue,
        };
        
        setInputValue("");
      }
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
          {messages.map((message) => (
            <div key={message.id}>
              <p>{message.text}</p>
              <p>{message.author}</p>
              <p>{message.timestamp}</p>
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