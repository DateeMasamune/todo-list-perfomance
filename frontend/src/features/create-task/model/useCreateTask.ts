import { useState } from "react";
import { useCreateTaskMutation } from "../../../shared/api";
import { ITodoResponse } from "../../../shared/types";

export const useCreateTask = () => {
  const [createTask] = useCreateTaskMutation();
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState<
    Omit<ITodoResponse, "id" | "is_checked" | "created_at" | "updated_at">
  >({
    title: "",
    description: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleCreateTask = () => {
    createTask(newTask);
    handleClose();
  };

  return {
    open,
    newTask,
    handleOpen,
    handleClose,
    handleCreateTask,
    handleChangeTask,
  };
};
