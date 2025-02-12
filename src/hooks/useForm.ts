import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useTasks } from "./useTasks.js";
import dayjs, { Dayjs } from "dayjs";
import { SelectChangeEvent } from "@mui/material";

export const useForm = () => {
  const { addTask } = useTasks();
  const [taskData, setTaskData] = useState({
    content: "",
    priority: "",
  });

  const initialDate = dayjs()
  const [dateValue, setDateValue] = useState<Dayjs | null>(initialDate);

  const [toggleForm, setToggleForm] = useState(false);

  const handleToggleForm = () => {
    setToggleForm((prevState) => !prevState);
  };

  

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const inputName = e?.target?.name;
    const inputValue = e?.target?.value;
    setTaskData({
      ...taskData,
      [inputName]: inputValue,
    });
  };

  const handleForm = (e: React.FormEvent) => {
    e?.preventDefault();
    addTask({ ...taskData, date: dateValue });
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
    setTaskData({
      content: "",
      priority: ""
    })
    setDateValue(dayjs())
  };

  return {
    taskData,
    handleInput,
    handleForm,
    toggleForm,
    handleToggleForm,
    dateValue,
    setDateValue,
  };
};
