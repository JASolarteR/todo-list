import React from "react";
import { useTasks } from "../../hooks/useTasks";
import { Input } from "../Input/Input";

export const SearchBar = () => {
  const { query, handleQuery } = useTasks();

  return (
    <Input
      style={{ margin: "1rem" }}
      type="text"
      placeholder="Find your tasks..."
      onChange={handleQuery}
      value={query}
    />
  );
};
