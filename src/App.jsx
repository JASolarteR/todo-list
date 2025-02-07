import "./App.css";
import { FilterSection } from "./components/Filter/FilterSection";
import { TaskForm } from "./components/Form/Form";
import { TaskList } from "./components/List/List";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Stats } from "./components/Stats/Stats";

function App() {
  return (
    <>
      <h1>Personal Task Manager</h1>
      <Stats />
      <TaskForm />
      <SearchBar />
      <FilterSection />
      <TaskList />
    </>
  );
}

export default App;
