import React from "react";

function ThemeSwitcher({ mode, setMode }) {
  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      style={{ marginBottom: "20px" }}
    >
      {mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}

export default ThemeSwitcher;
