import { useContext } from "react";
import { TaskContext } from "../context/TaskContext/TaskContext";

export const useTasks = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("Component should be wrapped in TaskContextProvider");
  }
  

  return taskContext;
};
