import { priorityOptions } from "../../constants/priorityOptions";
import { useForm } from "../../hooks/useForm";
import "./style.css";
import React, { lazy } from "react";

//Material UI
import Box from "@mui/material/Box";
import Add from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


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
    handleSelect
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

  const fabStyle = {
    position: "absolute",
    bottom: 30,
    right: 30,
  };

  if (!toggleForm) {
    return (
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleToggleForm}
        sx={fabStyle}
        role="add-task"
      >
        <Add />
      </Fab>
    );
  }

  return (
    <>
      <Modal open={toggleForm} onClose={handleToggleForm} className="task-form" role="form-modal">
        <Box sx={style}>
          <form onSubmit={handleForm} className="task-form">
            <h3>Add a new task</h3>
            <TextField
              id="task-content"
              label="Task content"
              variant="outlined"
              name="content"
              placeholder="Walk my dog..."
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
                onChange={handleSelect}
                required
                value={taskData.priority}
                placeholder="Task Priority"
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


