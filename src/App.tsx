import React, { useState, useMemo } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export interface Task {
  taskName: string;
  isPriority: boolean;
}

const sortPriorityFirst: (tasks: Task[]) => Task[] = (tasks) => {
  for (let i = 1; i < tasks.length; i++) {
    let current = i;

    while (
      tasks[current].isPriority &&
      !tasks[current - 1].isPriority &&
      current > 0
    ) {
      let temp = tasks[current];
      tasks[current] = tasks[current - 1];
      tasks[current - 1] = temp;

      current--;
    }
  }
  return tasks;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const prioritised = useMemo(() => sortPriorityFirst(tasks), [tasks]);

  const addTaskToList = (newTask: Task): void => {
    setTasks((tasks) => [...tasks, newTask]);
  };

  return (
    <>
      <h1>Productivity App</h1>
      <TaskForm addTaskToList={addTaskToList} />
      <TaskList tasks={prioritised} />
    </>
  );
}

export default App;
