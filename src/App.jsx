import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-indigo-500 text-center p-5 text-white text-4xl capitalize">
        hello world
      </h1>
    </>
  );
}

export default App;