import React, { useState } from "react";
import { Task } from "../App";

const TaskForm: React.FC<{
  addTaskToList: (newTask: Task) => void;
}> = ({ addTaskToList }) => {
  const [task, setTask] = useState("");
  const [isPriority, setIsPriority] = useState(false);

  const addTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTaskToList({ taskName: task, isPriority: isPriority });
    setTask("");
    setIsPriority(false);
  };

  return (
    <form onSubmit={addTask}>
      <label htmlFor="task">New task</label>
      <input
        type="text"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <label htmlFor="priority">Prioritise task?</label>
      <input
        type="checkbox"
        checked={isPriority}
        onChange={(e) => setIsPriority((isPriority) => !isPriority)}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default TaskForm;
