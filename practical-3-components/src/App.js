import React, { useState } from "react";
import Counter from "./components/Counter";
import TweetInput from "./components/TweetInput";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [mode, setMode] = useState("light");

  const pageStyle = {
    backgroundColor: mode === "light" ? "#ffffff" : "#121212",
    color: mode === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={pageStyle}>
      <Counter />
      <TweetInput />
       <ThemeSwitcher mode={mode} setMode={setMode} />
    </div>
  );
}

export default App;
