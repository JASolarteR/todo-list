/* eslint-disable react/prop-types */

import { useTasks } from "../../hooks/useTasks";
import "./style.css";

export const TaskItem = ({ id, completed, content, priority, date }) => {
  const { toggleCompleted, deleteTask } = useTasks();

  return (
    <li className="task-item">
      <div className="task-input">
        <input
          type="checkbox"
          name="task-input"
          id={id}
          value={completed}
          checked={completed}
          onChange={(e) => {
            toggleCompleted(id, e.target.checked);
          }}
        />
        <div className={completed ? "completed" : null}>
          <h4>
            {content} <span className={`priority ${priority}`}>{priority}</span>
          </h4>
          <p>Due to: {date}</p>
        </div>
      </div>
      <button onClick={() => deleteTask(id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
};
