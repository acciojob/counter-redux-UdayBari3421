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
      <h1 style={{ margin: 0 }}>
        <button onClick={() => setCount(count + 1)}>increment</button>
        {count}
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </h1>
    </div>
  );
};

export default App;
