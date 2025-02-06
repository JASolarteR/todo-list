import "./App.css";
import { TaskFilter } from "./components/Filter/TaskFilter";
import { TaskForm } from "./components/Form/Form";
import { TaskList } from "./components/List/List";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { handleFilterTasks } = useTasks();

  return (
    <>
      <TaskForm />
      <TaskFilter />
      <TaskList tasks={handleFilterTasks} />
    </>
  );
}

export default App;
