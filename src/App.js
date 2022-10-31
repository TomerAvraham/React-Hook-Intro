import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Cat from "./components/Cat";

function App() {
  const [toggle, setToggle] = useState(true);
  const [number, setNumber] = useState(0);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="App">
      <button onClick={handleToggle}>{toggle ? "Hide" : "Show"} Cat</button>
      {toggle && <Cat number={number} />}
      <button onClick={() => setNumber(10)}>click</button>
    </div>
  );
}

export default App;
