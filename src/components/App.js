import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex", gap: "15px", height: "20px" }}>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p style={{ margin: 0 }}>{count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
