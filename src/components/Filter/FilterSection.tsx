/* eslint-disable react/prop-types */
import React from "react";
import { filterOptions } from "../../constants/filterOptions";
import { priorityOptions } from "../../constants/priorityOptions";
import { useTasks } from "../../hooks/useTasks";
import "./style.css";

export const FilterSection = () => {
  return (
    <section className="filters-section">
      <TaskFilter
        name={"filter-status"}
        optionsArray={filterOptions}
      />

      <TaskFilter
        name={"filter-priority"}
        optionsArray={priorityOptions}
        withDefaultOption
      />
    </section>
  );
};

type TaskFilterProps = {
  name: string
  optionsArray: {
    value:string
    label:string
  }[]
  withDefaultOption?: boolean
}

const TaskFilter = ({ name, optionsArray, withDefaultOption = false } : TaskFilterProps) => {
  const { handleFilterChange } = useTasks();

  return (
    <select
      name={name}
      id={name}
      onChange={handleFilterChange}
      className="input-style"
    >
      {withDefaultOption && <option value="all">All priorities</option>}
      {optionsArray.map(({ value, label }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};
