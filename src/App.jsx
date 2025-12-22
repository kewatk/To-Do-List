import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  // State to store all todos
  const [todos, setTodos] = useState([]);

  // State to control input field
  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = () => {
    // Prevent empty todos
    if (input.trim() === "") return;

    // Add new todo object to existing list
    setTodos([
      ...todos,
      {
        id: Date.now(),        // Unique ID
        text: input,           // Task text
        completed: false       // Initial status
      }
    ]);

    // Clear input after adding
    setInput("");
  };

  // Delete todo by filtering it out
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle completed status
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed } // Update only clicked todo
          : todo
      )
    );
  };

  // Edit existing todo text
  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  };

  return (
    <div className="app">
      <Header />

      {/* Input section */}
      <div className="input-section">
        <input
          type="text"
          value={input}                         // Controlled input
          placeholder="Add a task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Pass data and handlers via props */}
      <ToDoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
