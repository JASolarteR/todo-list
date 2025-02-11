import React from "react"
import { useTasks } from "../../hooks/useTasks"

type TaskFilterProps = {
    name: string
    optionsArray: {
      value:string
      label:string
    }[]
    withDefaultOption?: boolean
  }
  
  export const TaskFilter = ({ name, optionsArray, withDefaultOption = false } : TaskFilterProps) => {
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
  