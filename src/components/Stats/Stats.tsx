import React from "react";
import "./style.css";
import { useStats } from "../../hooks/useStats";

export const Stats = () => {
  const { completedTasks, completionRate, pendingTasks } = useStats();

  return (
    <section className="stats-section" role="stats-section">
      <div className="stats-list">
        <p>Completed tasks: <span role="completed-tasks-count">{completedTasks}</span></p>
        <label htmlFor="tasks-progress" className="tasks-progress">
          Tasks progression
          <progress
            max={100}
            id="tasks-progress"
            value={completionRate.toPrecision(3)}
          >
            {completionRate.toPrecision(3)}%
          </progress>
        </label>
        <p >Pending tasks: <span role="pending-tasks-count">{pendingTasks}</span></p>
      </div>
    </section>
  );
};
