/* eslint-disable react/prop-types */
import React from "react";
import { filterOptions } from "../../constants/filterOptions";
import { priorityOptions } from "../../constants/priorityOptions";
import "./style.css";
import { TaskFilter } from "./TaskFilter";

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