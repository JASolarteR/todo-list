import { filterOptions } from "../../constants/filterOptions";
import { priorityOptions } from "../../constants/priorityOptions";
import { useTasks } from "../../hooks/useTasks";
import "./style.css";

export const TaskFilter = () => {
  const { handleFilterChange } = useTasks();

  return (
    <section className="filters-section">
      <select name="filter-status" id="filter-status" onChange={handleFilterChange} className="input-style">
        {filterOptions.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>

      <select name="filter-priority" id="filter-priority" onChange={handleFilterChange} className="input-style">
        <option value="all">All priorities</option>
        {priorityOptions.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </section>
  );
};
