import { FormEvent, useState } from "react";
import { useTasks } from "./useTasks.js";

export const useForm = () => {
  const { addTask } = useTasks();
  const [taskData, setTaskData] = useState({
    content: "",
    date: "",
    priority: ""
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const inputName = e?.target?.name
    const inputValue = e?.target?.value
    setTaskData({
      ...taskData,
      [inputName] : inputValue
    });    
  };

  const handleForm = (e: React.FormEvent) => {
    e?.preventDefault();
    addTask(taskData);
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
  };

  return {
    taskData,
    handleInput,
    handleForm,
  };
};
