import React from "react";
import { useTasks } from "../../hooks/useTasks";
import "./style.css"

export const Stats = () => {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(
    ({ completed }: { completed: boolean }) => completed
  ).length;
  const pendingTasks = tasks.filter(
    ({ completed }: { completed: boolean }) => !completed
  ).length;
  const completionRate = (1 / (tasks.length / completedTasks)) * 100 || 0;

  return (
    <section className="stats-section">
      <div className="stats-list">
        <p>Completed tasks: {completedTasks}</p>
          <label htmlFor="tasks-progress" className="tasks-progress">Tasks progression
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
