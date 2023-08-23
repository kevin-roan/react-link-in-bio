import React, { useEffect } from "react";
import Handles from "./components/Handles/Handles";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Kevin Roan";
  }, []);
  return (
    <div className="fade-in">
      <Handles />
    </div>
  );
}
export default App;
