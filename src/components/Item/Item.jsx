/* eslint-disable react/prop-types */

import { useTasks } from "../../hooks/useTasks";
import { Tag } from "../Tag/Tag";
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
          <h4 style={{display: "flex", gap: "1rem"}}>
            {content}
          </h4>
          <p style={{fontWeight: "lighter"}}>{date}</p>
        </div>
        <Tag tag={priority}/>
      </div>
      <button onClick={() => deleteTask(id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
};
