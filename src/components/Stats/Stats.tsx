import React from "react";
import "./style.css";
import { useStats } from "../../hooks/useStats";
import { CircularProgress } from "@mui/material";

export const Stats = () => {
  const { completedTasks, completionRate, pendingTasks } = useStats();

  return (
    <section className="stats-section">
      <div className="stats-list">
        <p>Completed tasks: {completedTasks}</p>
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
        <p>Pending tasks: {pendingTasks}</p>
      </div>
    </section>
  );
};
