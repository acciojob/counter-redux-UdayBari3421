import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        height: "20px",
        alignItems: "center",
      }}
    >
      <button onClick={() => setCount(count + 1)}>
        <h1>increment</h1>
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>
        <h1>decrement</h1>{" "}
      </button>
    </div>
  );
};

export default App;
