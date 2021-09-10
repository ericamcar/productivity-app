import React from "react";
import { Task } from "../App";

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={Math.random() * 9999999999}>{`${task.taskName} - ${
          task.isPriority && "Important!"
        }`}</li>
      ))}
    </ul>
  );
};

export default TaskList;
