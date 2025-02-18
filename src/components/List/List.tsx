/* eslint-disable react-hooks/exhaustive-deps */
import { dragAndDrop } from "@formkit/drag-and-drop/react";
import { useTasks } from "../../hooks/useTasks";
import { TaskItem } from "../Item/Item";
import "./style.css";
import { useEffect, useRef } from "react";
import React from "react";
import { Dayjs } from "dayjs";


export const TaskList = () => {
  const { filteredTasks, filter, setTasks } = useTasks();
  const parentRef = useRef<HTMLUListElement>(null!);

  const emptyStateMessage = () => {
    switch (filter) {
      case "completed":
        return "There are no tasks completed yet";

      case "pending":
        return "No tasks pending yet";

      default:
        return "Add new tasks to your day";
    }
  };

  useEffect(() => {
    dragAndDrop({
      parent: parentRef.current,
      state: [filteredTasks, setTasks],
    });
  }, [filteredTasks]);

  return (
    <ul className="task-list" ref={parentRef} title="tasks-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task: { id: string; content: string; completed: boolean; priority: string; date: Dayjs | null; }) => {
          const { id, content, completed, priority, date } = task;
          return (
            <TaskItem
              key={id}
              id={id}
              content={content}
              completed={completed}
              priority={priority}
              date={date}
            />
          );
        })
      ) : (
        <p role="empty-state-message">{emptyStateMessage()}</p>
      )}
    </ul>
  );
};
