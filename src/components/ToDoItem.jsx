import { useState } from "react";

function ToDoItem() {
  return (
    <li>
        <>
          {/* Edit mode UI */}
          <input/>
          <button >Save</button>
        </>
        <>
          {/* Normal display mode */}
          <span>
          </span>

          <button >Edit</button>
          <button >Delete</button>
        </>
    </li>
  );
}

export default ToDoItem;
