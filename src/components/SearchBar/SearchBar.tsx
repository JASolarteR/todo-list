import React from "react";
import { useTasks } from "../../hooks/useTasks";

export const SearchBar = () => {
  const { query, handleQuery } = useTasks();

  return (
    <input
      className="input-style"
      style={{ margin: "1rem" }}
      type="text"
      placeholder="Find your tasks..."
      onChange={handleQuery}
      value={query}
    />
  );
};
