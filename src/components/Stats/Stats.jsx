import { useTasks } from "../../hooks/useTasks";

export const Stats = () => {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(({ completed }) => completed).length;
  const pendingTasks = tasks.filter(({ completed }) => !completed).length
  const completionRate = 1 / (tasks.length / completedTasks) * 100

  return (
    <section className="stats-section">
      <h3>Statistics</h3>
      <div className="stats-list">
        <p>Completed tasks: {completedTasks}</p>
        <p>Pending tasks: {pendingTasks}</p>
        <p>Completion rate: %{completionRate}</p>
      </div>
    </section>
  );
};
