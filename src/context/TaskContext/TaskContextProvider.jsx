/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";

const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(localStorageTodos);
  const [filter, setFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({ content, date, priority }) => {
    const newTask = {
      id: crypto.randomUUID(),
      content,
      completed: false,
      date,
      priority,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter(({ id }) => id !== taskId);
    setTasks(filteredTasks);
  };

  const toggleCompleted = (taskId, state) => {
    const updatedList = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, completed: state };
      }
      return task;
    });
    setTasks(updatedList);
  };

  const handleFilterChange = (e) => {
    if (e.target.name === "filter-status") {
      setFilter(e.target.value);
    }
    setPriorityFilter(e.target.value);
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

  const handleQuery = (e) => {
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
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
