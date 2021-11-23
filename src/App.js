import React, { useState } from "react";
import Create from "./Create";
import Info from "./Info";

// event handling

const App = () => {
  // example of using hooks : useState
  let [name, setName] = useState("Origin Name");

  // lift state from Create.js
  let [messages, setMessages] = useState([]);

  // button click handler
  const buttonHandler = (e) => {
    e.preventDefault();
    let date = new Date().toLocaleDateString();
    alert(date);
  };

  const changeNameHandler = (e) => {
    e.preventDefault();
    setName("Changed Name.");
  };

  return (
    <div>
      <Create messages={messages} setMessages={setMessages} /> 
      <Info messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default App;
