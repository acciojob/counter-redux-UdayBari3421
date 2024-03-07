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
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1 style={{ margin: 0 }}>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
