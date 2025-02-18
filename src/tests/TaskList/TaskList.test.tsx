import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { TaskContextProvider } from "../../context/TaskContext/TaskContextProvider";
import { TaskList } from "../../components/List/List";
import React from "react";


describe("List Component", () => {
  afterEach(cleanup);

  it("should render list component", () => {
    render(
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
    );

    const emptyMessageElement = screen.getByRole("empty-state-message");

    expect(emptyMessageElement).toBeInTheDocument();
  });

});
