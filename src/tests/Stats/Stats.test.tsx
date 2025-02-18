import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TaskContextProvider } from "../../context/TaskContext/TaskContextProvider";
import { Stats } from "../../components/Stats/Stats";
import React from "react";
import * as useStatsHook from "../../hooks/useStats";

describe("Task stats component", () => {
  it("should render section", () => {
    render(
      <TaskContextProvider>
        <Stats />
      </TaskContextProvider>
    );

    expect(screen.getByRole("stats-section")).toBeInTheDocument();
  });

  it("should render number of tasks", () => {
    const useStatsSpy = vi.spyOn(useStatsHook, "useStats");
    const completedTasks = 5;
    const pendingTasks = 3;
    useStatsSpy.mockReturnValue({
        completedTasks,
        pendingTasks,
        completionRate: 0
    })

    render(
        <TaskContextProvider>
          <Stats />
        </TaskContextProvider>
      );

    expect(screen.getByRole("completed-tasks-count").textContent).toEqual(completedTasks.toString())
    expect(screen.getByRole("pending-tasks-count").textContent).toEqual(pendingTasks.toString())
  });
});
