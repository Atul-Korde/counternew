import { useState } from "react";

function App() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ padding: "20px", border: "1px solid black", display: "inline-block", margin: "auto", borderRadius: "40px" }}>
        <h1>Count:    <span style={{ color: "red" }}>{count}</span></h1>
        <div style={{ backgroundColor: "#12df30", padding: "20px", borderRadius: "30px" }}>
          <button onClick={() => setCount(count + 1)}>INC</button>
          <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>DEC</button>
          <button onClick={() => setCount(initialCount)}>Reset</button>

        </div>
      </div>
    </div>
  );
}

export default App;
