import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TaskContextProvider } from "../../context/TaskContext/TaskContextProvider";
import { FilterSection } from "../../components/Filter/FilterSection";
import React from "react";

describe("Tasks Filter Component", () => {
  it("Renders filter inputs", () => {
    render(
      <TaskContextProvider>
        <FilterSection />
      </TaskContextProvider>
    );

    const filterStatusInput = screen.getByPlaceholderText("Filter tasks by status")
    const filterPriorityInput = screen.getByPlaceholderText("Filter tasks by priority")

    expect(filterStatusInput).toBeInTheDocument()
    expect(filterPriorityInput).toBeInTheDocument()
  });

  it("should change input value", () => {
    render(
      <TaskContextProvider>
        <FilterSection />
      </TaskContextProvider>
    );

    const filterStatusInput = screen.getByPlaceholderText("Filter tasks by status")
    const filterPriorityInput = screen.getByPlaceholderText("Filter tasks by priority")

    fireEvent.change(filterStatusInput, { target: { value: "completed" } });
    expect(screen.getByText("Completed")).toBeInTheDocument()

    fireEvent.change(filterPriorityInput, { target: { value: "high" } });
    expect(screen.getByText("High")).toBeInTheDocument()
  });

  
});
