/* eslint-disable react/prop-types */

import React, { lazy } from "react";
import { useTasks } from "../../hooks/useTasks";
import "./style.css";
import { TaskProps } from "../../context/TaskContext/TaskContextProvider";
import { Delete, DragIndicator } from "@mui/icons-material";
import { useTaskItem } from "../../hooks/useTaskItem";

const Card = lazy(() => import("@mui/material/Card"))
const Checkbox = lazy(() => import("@mui/material/Checkbox"))
const Chip = lazy(() => import("@mui/material/Chip"))
const IconButton = lazy(() => import("@mui/material/IconButton"))
const Tooltip = lazy(() => import("@mui/material/Tooltip"))


export const TaskItem = ({
  id,
  completed,
  content,
  priority,
  date,
}: TaskProps) => {
  const { toggleCompleted, deleteTask } = useTasks();
  const { formattedDay, handleChipVariant, handleMouseState, mouseState } =
    useTaskItem();


  return (
    <>
      <Card sx={{ width: "80%" }}>
        <li className="task-item">
          <div className="task-input">
            <DragIndicator className="kanban-handle"></DragIndicator>
            <Checkbox
              onChange={(e) => {
                toggleCompleted(id, e.target.checked);
              }}
              checked={completed}
              id={id}
            />
            <div className={completed ? "completed" : undefined}>
              <h4 style={{ display: "flex", gap: "1rem" }}>{content}</h4>
              <p style={{ fontWeight: "lighter" }}>{formattedDay(date)}</p>
            </div>
            <Chip
              label={priority}
              size="small"
              color={handleChipVariant(priority)}
            />
          </div>
          <Tooltip title="Delete task">
            <IconButton
              onClick={() => {
                deleteTask(id);
              }}
              onMouseEnter={handleMouseState}
              onMouseLeave={handleMouseState}
              color={mouseState ? "error" : "default"}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </li>
      </Card>
    </>
  );
};
