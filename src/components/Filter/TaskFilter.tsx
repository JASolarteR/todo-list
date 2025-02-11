import React from "react";
import { useTasks } from "../../hooks/useTasks";
import { InputLabel, MenuItem, Select } from "@mui/material";

type TaskFilterProps = {
  name: string;
  optionsArray: {
    value: string;
    label: string;
  }[];
  withDefaultOption?: boolean;
};

export const TaskFilter = ({
  name,
  optionsArray,
  withDefaultOption = false,
}: TaskFilterProps) => {
  const { handleFilterChange } = useTasks();

  return (
    <>
      <Select
        name={name}
        id={name}
        onChange={handleFilterChange}
        size="small"
      >
        {withDefaultOption && <MenuItem defaultChecked value="all">All priorities</MenuItem>}
        {optionsArray.map(({ value, label }) => {
          return (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
