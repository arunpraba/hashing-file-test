import { MD5 } from "crypto-js";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [hash, setHash] = useState();

  const onChange = (e) => {
    const reader = new FileReader();
    const blob = e.target.files[0];
    reader.readAsDataURL(blob);
    reader.onload = (e) => {
      const encrypted = MD5(e.target.result, "PASSWORD").toString();
      setHash(encrypted);
    };
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="file" onChange={onChange} />
      <br />
      <pre
        style={{
          margin: "10px",
          minHeight: "300px",
          minBlockSize: "300px",
          background: "#f4f4f4"
        }}
      >
        <code>{hash}</code>
      </pre>
    </div>
  );
}
