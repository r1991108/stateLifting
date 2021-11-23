import React, { useState } from "react";

const Create = ({ messages, setMessages }) => {
  let [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div>
      <form>
        <input type="text" onChange={inputHandler} value={input} />
        <button onClick={submitHandler}>Submit</button>
        {/* <p>{input}</p>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))} */}
      </form>
    </div>
  );
};

export default Create;
