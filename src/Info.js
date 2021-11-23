import React from "react";

const Info = ({ messages, setMessages, id }) => {
  const deleteHandler = (msgId) => {
    console.log(msgId);
    console.log(messages);
    setMessages(messages.filter((msg) => msg.id !== msgId));
  };
  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.id}>
          <p>{msg.input}</p>
          <button
            onClick={() => {
              deleteHandler(msg.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Info;
