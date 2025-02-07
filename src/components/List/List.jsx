/* eslint-disable react-hooks/exhaustive-deps */
import { dragAndDrop } from "@formkit/drag-and-drop/react";
import { useTasks } from "../../hooks/useTasks";
import { TaskItem } from "../Item/Item";
import "./style.css";
import { useEffect, useRef } from "react";

export const TaskList = () => {
  const { filteredTasks, filter, setTasks } = useTasks();
  const parentRef = useRef(null);

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

  const config = { sortable: true };

  useEffect(() => {
    dragAndDrop({
      parent: parentRef.current,
      state: [filteredTasks, setTasks],
      config,
    });
  }, []);

  return (
    <ul className="task-list" ref={parentRef}>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => {
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
        <p>{emptyStateMessage()}</p>
      )}
    </ul>
  );
};
