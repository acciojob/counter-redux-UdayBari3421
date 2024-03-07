import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(2);
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        height: "20px",
        alignItems: "center",
      }}
    >
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h1 style={{ margin: 0 }}>{count}</h1>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

export default App;
