import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, afterEach } from "vitest";
import { TaskContextProvider } from "../../context/TaskContext/TaskContextProvider";
import { Stats } from "../../components/Stats/Stats";
import * as useStatsHook from "../../hooks/useStats";
import React from "react";

describe("Task stats component", () => {
  afterEach(() => {
    vi.restoreAllMocks(); // Restore all mocks after each test
  });

  const renderStats = () => {
    render(
      <TaskContextProvider>
        <Stats />
      </TaskContextProvider>
    );
  };

  it("should render section", () => {
    renderStats()
    expect(screen.getByRole("stats-section")).toBeInTheDocument();
  });

  it("should display the correct number of completed and pending tasks", () => {
    const useStatsSpy = vi.spyOn(useStatsHook, "useStats");
    const completedTasks = 5;
    const pendingTasks = 3;

    useStatsSpy.mockReturnValue({
      completedTasks,
      pendingTasks,
      completionRate: 0,
    });

    renderStats()

    expect(screen.getByRole("completed-tasks-count").textContent).toEqual(
      completedTasks.toString()
    );
    expect(screen.getByRole("pending-tasks-count").textContent).toEqual(
      pendingTasks.toString()
    );
  });

  it("should render completion rate", () => {
    const useStatsSpy = vi.spyOn(useStatsHook, "useStats");
    const completedTasks = 5;
    const pendingTasks = 3;
    const completionRate =
      (completedTasks / (completedTasks + pendingTasks)) * 100;

    useStatsSpy.mockReturnValue({
      completedTasks,
      pendingTasks,
      completionRate,
    });

    renderStats()

    expect(screen.getByRole("progressbar").textContent).toEqual(
      `${completionRate}%`
    );
  });
});
