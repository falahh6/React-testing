import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const toggleTextChangeHandler = () => {
    setChangedText(true);
  };
  return (
    <>
      <h1>Hello World!</h1>
      {!changedText && <Output>This is first test I'm Writing</Output>}
      {changedText && <Output>Changed</Output>}
      <button onClick={toggleTextChangeHandler}> Change Text </button>
    </>
  );
};

export default Greeting;
