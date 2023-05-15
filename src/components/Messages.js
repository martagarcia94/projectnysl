import Template from "./Template";
import "./../assets/css/messages.css";
import React, { useState } from "react";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
  
    const handleMessageSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        const newMessage = {
          id: Date.now(),
          text: inputValue,
        };
        setMessages([...messages, newMessage]);
        setInputValue("");
      }
    };
  return (
<Template title="Messages">
      <div>
        <h1 className="messages__header">Messages</h1>

        <div className="messages__container">
          {messages.map((message) => (
            <div key={message.id}>{message.text}</div>
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