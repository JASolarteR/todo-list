import { priorityOptions } from "../../constants/priorityOptions";
import { useForm } from "../../hooks/useForm";
import "./style.css";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useTasks } from "../../hooks/useTasks";

type PriorityOptionsType = {
  id: string;
  value: string;
  label: string;
};

export const TaskForm = () => {
  const {
    handleForm,
    handleInput,
    taskData,
    dateValue,
    toggleForm,
    handleToggleForm,
    setDateValue,
  } = useForm();

  const style = {
    position: "absolute",
    top: "33%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  if (!toggleForm) {
    return (
      <Button
        variant="contained"
        startIcon={<Add />}
        size="small"
        style={{ marginBottom: "1rem" }}
        onClick={handleToggleForm}
      >
        Add task
      </Button>
    );
  }

  return (
    <>
      <Modal open={toggleForm} onClose={handleToggleForm} className="task-form">
        <Box sx={style}>
          <form onSubmit={handleForm} className="task-form">
            <h3>Add a new task</h3>
            <TextField
              id="task-content"
              label="Task content"
              variant="outlined"
              name="content"
              value={taskData.content}
              onChange={handleInput}
              size="small"
              required
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                onChange={(newValue) => {
                  setDateValue(newValue);                  
                }}
                label={"Task due date"}
                value={dateValue}
                defaultValue={dayjs()}
                minDate={dayjs()}
              
              />
            </LocalizationProvider>
            <FormControl size="small">
              <InputLabel id="filter-status">Priority</InputLabel>
              <Select
                name="priority"
                id="task-priority"
                className="input-style"
                onChange={handleInput}
                required
                value={taskData.priority}
              >
                {priorityOptions
                  .slice(1)
                  .map(({ id, value, label }: PriorityOptionsType) => {
                    return (
                      <MenuItem key={id} value={value}>
                        {label}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <Button type="submit" id="add-btn" variant="contained" size="small">
              Add todo
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
