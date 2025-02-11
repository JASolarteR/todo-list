import { useTasks } from "./useTasks";

export const useStats = () => {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(
    ({ completed }: { completed: boolean }) => completed
  ).length;

  const pendingTasks = tasks.filter(
    ({ completed }: { completed: boolean }) => !completed
  ).length;

  const completionRate = (1 / (tasks.length / completedTasks)) * 100 || 0;

  return {
    completedTasks,
    pendingTasks,
    completionRate,
  };
};
