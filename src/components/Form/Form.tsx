import { useState } from "react";
import { priorityOptions } from "../../constants/priorityOptions";
import { useForm } from "../../hooks/useForm";
import "./style.css";
import React from "react";
import { Input } from "../Input/Input";

type PriorityOptionsType = {
  id: string;
  value: string;
  label: string;
};

export const TaskForm = () => {
  const { handleForm, handleInput, taskData, toggleForm, handleToggleForm } =
    useForm();
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
        <p onClick={handleToggleForm} style={{ cursor: "pointer" }}>
          &gt; Go back{" "}
        </p>
        <Input
          onChange={handleInput}
          value={taskData.content}
          type="text"
          placeholder="Add task"
          name="content"
          id="task-content"
          required
        />
        <Input
          onChange={handleInput}
          value={taskData.content}
          type="date"
          placeholder="Add task"
          name="date"
          id="task-due-date"
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
          {priorityOptions.map(({ id, value, label }: PriorityOptionsType) => {
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
