import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import React from "react";
import { TaskContextProvider } from "../../context/TaskContext/TaskContextProvider";
import "@testing-library/jest-dom";

describe("Task Form Test", () => {
  afterEach(cleanup);
  it("Should render component", () => {
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

    // Verify that the FAB with the label "add" is in the document
    const fabToggleForm = screen.getByRole("add-task");
    expect(fabToggleForm).toBeInTheDocument();

    // Simulate clicking the FAB to toggle the form
    fireEvent.click(fabToggleForm);
    

    const formElement = screen.getByRole("form-modal");
    expect(formElement).toBeInTheDocument();
    screen.debug()
  });
});
