import { useState } from "react";
import "./App.css";
import { TaskFilter } from "./components/Filter/TaskFilter";
import { TaskForm } from "./components/Form/Form";
import { TaskList } from "./components/List/List";
import { useTasks } from "./hooks/useTasks";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Stats } from "./components/Stats/Stats";

function App() {
  const { handleFilterTasks } = useTasks();
  const [toggleForm, setToggleForm] = useState(false);

  const handleToggleForm = () => {
    setToggleForm((prevState) => !prevState);
  };

  return (
    <>
      <h1>Personal Task Manager</h1>
      <button className="toggle-form" onClick={handleToggleForm}>
        Add new task
      </button>

      <Stats />

      {toggleForm ? (
        <TaskForm toggleForm={handleToggleForm} />
      ) : (
        <>
          <SearchBar />
          <TaskFilter />
          <TaskList tasks={handleFilterTasks} />
        </>
      )}
    </>
  );
}

export default App;
