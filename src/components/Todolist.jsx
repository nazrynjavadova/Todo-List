import React, { useState } from "react";
import "../assets/css/todolist.css";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() === "") return;

    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    setTask("");
  };

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter(( index) => index != indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <div className="todo">
        <button onClick={handleAddTask}>Submit</button>
      </div>

      <ol>
        {tasks.map((t, index) => (
          <li className="task-item" key={index}>
            {t}
            <button className="remove-task" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todolist;
