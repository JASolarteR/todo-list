import React from "react";
import "./App.css";
import { FilterSection } from "./components/Filter/FilterSection";
import { TaskForm } from "./components/Form/Form";
import { TaskList } from "./components/List/List";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Stats } from "./components/Stats/Stats";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <h1>Personal Task Manager</h1>
        <Stats />
        <TaskForm />
        <FilterSection />
        <TaskList />
      </ThemeProvider>
    </>
  );
}

export default App;
