import { useTasks } from "../../hooks/useTasks";
import { TaskItem } from "../Item/Item";
import "./style.css"

export const TaskList = () => {
  const { filteredTasks, filter } = useTasks();

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
  return (
    <ul className="task-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map(({ id, content, completed, priority, date }) => {
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
