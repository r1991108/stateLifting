import React from "react";

const Info = ({ messages, setMessages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default Info;
