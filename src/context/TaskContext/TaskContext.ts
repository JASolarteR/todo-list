import { createContext, Dispatch, SetStateAction } from "react";
import { AddTaskProps, TaskProps } from "./TaskContextProvider";
import { SelectChangeEvent } from "@mui/material";

export type TaskContextTypes = {
    addTask: (task: AddTaskProps) => void,
    deleteTask: (taskId: string) => void
    toggleCompleted: (taskId: string, state: boolean) => void
    handleFilterChange: (e: SelectChangeEvent, setState: React.Dispatch<React.SetStateAction<string>>) => void
    handleQuery: (e: React.ChangeEvent<HTMLInputElement>)=>void
    tasks: TaskProps[]
    filter: string
    filteredTasks: TaskProps[]
    query: string
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>
    priorityFilter: string
    setPriorityFilter: React.Dispatch<React.SetStateAction<string>>
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const TaskContext = createContext<TaskContextTypes>(null!);
