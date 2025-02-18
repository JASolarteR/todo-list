import { afterEach, describe, expect, it } from "vitest";
import {
  cleanup,
  fireEvent,
  getByPlaceholderText,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import React from "react";
import { TaskContextProvider } from "../../context/TaskContext/TaskContextProvider";
import dayjs from "dayjs";

describe("Task Form Test", () => {
  afterEach(cleanup);
  it("Should render form component", () => {
    render(
      <TaskContextProvider>
        <TaskForm />
      </TaskContextProvider>
    );
  });

  it("Should change toggleForm state", () => {
    render(
      <TaskContextProvider>
        <TaskForm />
      </TaskContextProvider>
    );

    const fabToggleForm = screen.getByRole("add-task");
    expect(fabToggleForm).toBeInTheDocument();

    fireEvent.click(fabToggleForm);

    const formElement = screen.getByRole("form-modal");
    expect(formElement).toBeInTheDocument();
  });

  it("Task form submit", () => {
    render(
      <TaskContextProvider>
        <TaskForm />
      </TaskContextProvider>
    );
    const fabToggleForm = screen.getByRole("add-task");
    expect(fabToggleForm).toBeInTheDocument();

    fireEvent.click(fabToggleForm);

    const formElement = screen.getByRole("form-modal");
    expect(formElement).toBeInTheDocument();

    const taskContentInput = screen.getByPlaceholderText("Walk my dog...");

    const datePicker = screen.getByLabelText("Task due date");

    const priorityInput = screen.getByPlaceholderText("Task Priority");

    fireEvent.change(taskContentInput, { target: { value: "Task Content" } });
    fireEvent.change(datePicker, { target: { value: dayjs() } });
    fireEvent.change(priorityInput, { target: { value: "high" } });

    fireEvent.click(screen.getByText("Add todo"));
  });
});
