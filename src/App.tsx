import React from "react";
import "./App.css";
import { FilterSection } from "./components/Filter/FilterSection";
import { TaskForm } from "./components/Form/Form";
import { TaskList } from "./components/List/List";
import { Stats } from "./components/Stats/Stats";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
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
        <Stats />
        <TaskForm />
        <FilterSection />
        <TaskList />
      </ThemeProvider>
    </>
  );
}

export default App;
