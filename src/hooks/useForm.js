import { useState } from "react";
import { useTasks } from "./useTasks";

export const useForm = () => {
  const { addTask } = useTasks();
  const [taskData, setTaskData] = useState({
    content: "",
    date: "",
    priority: ""
  });

  const handleInput = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setTaskData({
      ...taskData,
      [inputName] : inputValue
    });    
  };

  const handleForm = (e) => {
    e.preventDefault();
    addTask(taskData);
    e.target.reset()
  };

  return {
    taskData,
    handleInput,
    handleForm,
  };
};
