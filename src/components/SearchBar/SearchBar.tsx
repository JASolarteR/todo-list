import React from "react";
import { useTasks } from "../../hooks/useTasks";
import { Input } from "../Input/Input";
import { TextField } from "@mui/material";

export const SearchBar = () => {
  const { query, handleQuery } = useTasks();

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Find your tasks..."
        variant="outlined"
        value={query}
        onChange={handleQuery}
        size="small"
      />
    </>
  );
};
