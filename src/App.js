import React, { useState } from "react";
import Create from "./Create";
import Info from "./Info";

// event handling

const App = () => {
  // example of using hooks : useState
  // lift state from Create.js
  let [messages, setMessages] = useState([]);

  return (
    <div>
      <Create messages={messages} setMessages={setMessages} /> 
      <Info messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default App;
