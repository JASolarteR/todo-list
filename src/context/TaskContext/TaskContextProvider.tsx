/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import { SelectChangeEvent } from "@mui/material";
import { Dayjs } from "dayjs";

type TaskContextProviderProps = {
  children: React.ReactNode
}

export type TaskProps = {
    id: string
    content: string
    completed: boolean
    date: Dayjs | null
    priority: string
}

export type AddTaskProps = {
  content:string
  date: Dayjs | null
  priority: string
}

export const TaskContextProvider = ({ children }:TaskContextProviderProps) => {
  const [tasks, setTasks] = useState<TaskProps[]>(()=>{
    const localTodos = localStorage.getItem("todos")
    return localTodos ? JSON.parse(localTodos) : []
  });
  const [filter, setFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));    
  }, [tasks]);

  const addTask = ({ content, date, priority }:AddTaskProps) => {
    const newTask = {
      id: crypto.randomUUID(),
      content,
      completed: false,
      date,
      priority,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter(({ id }) => id !== taskId);
    setTasks(filteredTasks);
  };

  const toggleCompleted = (taskId: string, state:boolean) => {
    const updatedList = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, completed: state };
      }
      return task;
    });
    setTasks(updatedList);
  };

  const handleFilterChange = (e: SelectChangeEvent, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(e.target.value);
  };

  const handleFilteredTasks = () => {
    let filteredTasks = tasks.filter(({content}) => content.toLowerCase().includes(query.toLowerCase()));

    switch (filter) {
      case "completed":
        filteredTasks = filteredTasks.filter(({ completed }) => completed);
        break;
      case "pending":
        filteredTasks = filteredTasks.filter(({ completed }) => !completed);
        break;
    }

    switch (priorityFilter) {
      case "low":
        filteredTasks = filteredTasks.filter(
          ({ priority }) => priority === "low"
        );
        break;
      case "mid":
        filteredTasks = filteredTasks.filter(
          ({ priority }) => priority === "mid"
        );
        break;
      case "high":
        filteredTasks = filteredTasks.filter(
          ({ priority }) => priority === "high"
        );
        break;
    }

    return filteredTasks;
  };

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredTasks = handleFilteredTasks();
  

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        handleFilterChange,
        addTask,
        deleteTask,
        toggleCompleted,
        filteredTasks,
        handleQuery,
        query,
        setTasks,
        priorityFilter,
        setPriorityFilter,
        setFilter
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
