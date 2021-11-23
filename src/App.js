import React, { useState } from "react";
import Create from "./Create";
import Info from "./Info";

// event handling

const App = () => {
  // example of using hooks : useState
  let [name, setName] = useState("Origin Name");

  // state lift from Create.js
  let [messages, setMessages] = useState([]);

  // button click handler
  const buttonHandler = (e) => {
    e.preventDefault();
    let date = new Date().toLocaleDateString();
    alert(date);
  };

  const helloHandler = (msg) => {
    console.log(`msg is ${msg}`);
    alert(msg);
  };

  const changeNameHandler = (e) => {
    e.preventDefault();
    setName("Changed Name.");
  };

  return (
    <div>
      <form action="">
        <input type="text" />
        <button type="button" onClick={buttonHandler}>
          submit
        </button>
        <br />
        {/* you have to put the function into an arrow function in order to run it after being clicked, or it will run automatically everytime when you refresh the page */}
        <button
          type="button"
          onClick={(e) => {
            console.log(e);
            helloHandler("Hello there");
          }}
        >
          Alert Hello
        </button>
        <h1>{name}</h1>
        <button onClick={changeNameHandler}>Click to change name</button>
      </form>
      <Create messages={messages} setMessages={setMessages} />
      <Info messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default App;
