import { createContext, Dispatch, SetStateAction } from "react";
import { AddTaskProps, TaskProps } from "./TaskContextProvider";

type TaskContextTypes = {
    addTask: (task: AddTaskProps) => void,
    deleteTask: (taskId: string) => void
    toggleCompleted: (taskId: string, state: boolean) => void
    handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    handleQuery: (e: React.ChangeEvent<HTMLInputElement>)=>void
    tasks: TaskProps[]
    filter: string
    filteredTasks: TaskProps[]
    query: string
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>
}

export const TaskContext = createContext<TaskContextTypes>(null!);
