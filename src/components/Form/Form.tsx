import { useState } from "react";
import { priorityOptions } from "../../constants/priorityOptions";
import { useForm } from "../../hooks/useForm";
import "./style.css";
import React from "react";

type PriorityOptionsType = {
  id: string
  value: string
  label: string
}

export const TaskForm = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const handleToggleForm = () => {
    setToggleForm((prevState) => !prevState);
  };

  const { handleForm, handleInput, taskData } = useForm();
  const currentDate = new Date().toJSON().slice(0, 10);

  if (!toggleForm) {
    return (
      <button className="toggle-form" onClick={handleToggleForm}>
        Add new task
      </button>
    );
  }

  return (
    <>
      <form onSubmit={handleForm} className="task-form">
        <p onClick={handleToggleForm} style={{cursor: "pointer"}}>&gt; Go back </p>
        <input
          type="text"
          placeholder="Add todo"
          onChange={handleInput}
          value={taskData.content}
          name="content"
          id="task-content"
          className="input-style"
          required
        />
        <input
          type="date"
          name="date"
          id="task-due-date"
          className="input-style"
          onChange={handleInput}
          min={currentDate}
          required
        />
        <select
          name="priority"
          id="task-priority"
          className="input-style"
          onChange={handleInput}
          required
        >
          <option value="" defaultChecked>
            Task priority
          </option>
          {priorityOptions.map(({ id, value, label }:PriorityOptionsType) => {
            return (
              <option key={id} value={value}>
                {label}
              </option>
            );
          })}
        </select>
        <button type="submit" id="add-btn">
          Add todo
        </button>
      </form>
    </>
  );
};
