import React from "react";

import ToDoItem from "./components/todoItem";

const App = () => {
  return (
    <div className="todo-list">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
};

export default App;
