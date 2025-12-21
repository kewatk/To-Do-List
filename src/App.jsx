import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      {/* Input section */}
      <div className="input-section">
        <input/>
        <button>Add</button>
      </div>
    </div>
  );
}

export default App;
