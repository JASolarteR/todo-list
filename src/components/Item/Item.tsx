/* eslint-disable react/prop-types */

import React from "react";
import { useTasks } from "../../hooks/useTasks";
import { Tag } from "../Tag/Tag";
import "./style.css";
import { TaskProps } from "../../context/TaskContext/TaskContextProvider";
import { Input } from "../Input/Input";
import { Button, Checkbox, Chip } from "@mui/material";

export const TaskItem = ({
  id,
  completed,
  content,
  priority,
  date,
}: TaskProps) => {
  const { toggleCompleted, deleteTask } = useTasks();

  return (
    <li className="task-item">
      <div className="task-input">
        <Checkbox
          onChange={(e) => {
            toggleCompleted(id, e.target.checked);
          }}
          checked={completed}
          id={id}
        />
        <div className={completed ? "completed" : undefined}>
          <h4 style={{ display: "flex", gap: "1rem" }}>{content}</h4>
          <p style={{ fontWeight: "lighter" }}>{date}</p>
        </div>
        <Chip label={priority} variant="outlined" size="small" />
      </div>
      <Button variant="contained" color="error" onClick={() => deleteTask(id)}>
        Delete
      </Button>
    </li>
  );
};
