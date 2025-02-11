/* eslint-disable react/prop-types */
import React from "react";
import { filterOptions } from "../../constants/filterOptions";
import { priorityOptions } from "../../constants/priorityOptions";
import "./style.css";
import { TaskFilter } from "./TaskFilter";
import { SearchBar } from "../SearchBar/SearchBar";

export const FilterSection = () => {
  return (
    <section className="filters-section">
      <SearchBar />

      <TaskFilter name={"filter-status"} optionsArray={filterOptions} />

      <TaskFilter
        name={"filter-priority"}
        optionsArray={priorityOptions}
        withDefaultOption
      />
    </section>
  );
};
