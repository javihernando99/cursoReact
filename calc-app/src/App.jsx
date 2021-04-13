import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperation";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  const [stack, setStack] = useState("");
  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length ? items[items.length - 1] : "0";
  return (
    <main className="react-calculator">
      <Result value={value}></Result>
      <Numbers
        onClickNumbers={(number) => {
          setStack(`${stack}${number}`);
        }}
      ></Numbers>
      <Functions
        onContentClear={() => setStack("")}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      ></Functions>
      <MathOperations
        onClickOperation={(operation) => setStack(`${stack}${operation}`)}
        onClickEqual={() => setStack(eval(stack).toString())}
      ></MathOperations>
    </main>
  );
};

export default App;
