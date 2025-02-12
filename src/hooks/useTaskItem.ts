import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export const useTaskItem = () => {
  const [mouseState, setMouseState] = useState(false);

  const handleMouseState = () => {
    setMouseState((prevState) => !prevState);
  };

  const formattedDay = (date: Dayjs | null) => dayjs(date).format("MMM/DD/YY");

  const handleChipVariant = (priority: string) => {
    switch (priority) {
      case "high":
        return "error";

      case "mid":
        return "warning";

      case "low":
        return "success";

      default:
        return "default";
    }
  };


  return{
    formattedDay,
    handleChipVariant,
    handleMouseState,
    mouseState
  }
};
