import React from "react";
import "./App.css";
import { FilterSection } from "./components/Filter/FilterSection";
import { TaskList } from "./components/List/List";
import { Stats } from "./components/Stats/Stats";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { TaskForm } from "./components/TaskForm/TaskForm";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <h2>Task Manager</h2>
        <CssBaseline />
        <Stats />
        <TaskForm />
        <FilterSection />
        <TaskList />
      </ThemeProvider>
    </>
  );
}

export default App;
