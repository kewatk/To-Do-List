import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onDelete, onToggle, onEdit }) {
  return (
    <ul>
      {/* Loop through todos array */}
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}      // Unique key (never use index)
          todo={todo}        // Single todo object
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
