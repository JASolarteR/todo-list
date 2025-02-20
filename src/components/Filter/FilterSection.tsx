/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { filterOptions } from "../../constants/filterOptions";
import { priorityOptions } from "../../constants/priorityOptions";
import "./style.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { useTasks } from "../../hooks/useTasks";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const FilterSection = () => {
  const {
    filter,
    priorityFilter,
    handleFilterChange,
    setFilter,
    setPriorityFilter,
  } = useTasks();

  return (
    <section className="filters-section">
      <SearchBar />
      <FormControl size="small">
        <InputLabel id="filter-status">Status</InputLabel>
        <Select
          name={"filter-status"}
          id={"filter-status"}
          onChange={(e) => {
            handleFilterChange(e, setFilter);
          }}
          value={filter}
          labelId="filter-status"
          role="filter status"
        >
          {filterOptions.map(({ value, label }) => {
            return (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="filter-priority">Priority</InputLabel>
        <Select
          name={"filter-priority"}
          id={"filter-priority"}
          onChange={(e) => {
            handleFilterChange(e, setPriorityFilter);
          }}
          size="small"
          value={priorityFilter}
          labelId="filter-priority"
          role="filter priority"
        >
          {priorityOptions.map(({ value, label }) => {
            return (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </section>
  );
};
