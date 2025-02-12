import React from "react";
import "./App.css";
import { FilterSection } from "./components/Filter/FilterSection";
import { TaskForm } from "./components/Form/Form";
import { TaskList } from "./components/List/List";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Stats } from "./components/Stats/Stats";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";

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
        <Typography variant="h1" sx={{ fontSize: "2rem" }}>
          Personal Task Manager
        </Typography>
        <Stats />
        <TaskForm />
        <FilterSection />
        <TaskList />
      </ThemeProvider>
    </>
  );
}

export default App;
