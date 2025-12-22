import { useState } from "react";

function ToDoItem({ todo, onDelete, onToggle, onEdit }) {
  // State to control edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State to store edited text
  const [editText, setEditText] = useState(todo.text);

  // Save edited todo
  const saveEdit = () => {
    onEdit(todo.id, editText); // Update parent state
    setIsEditing(false);       // Exit edit mode
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          {/* Edit mode UI */}
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          {/* Normal display mode */}
          <span onClick={() => onToggle(todo.id)}>
            {todo.text}
          </span>

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
