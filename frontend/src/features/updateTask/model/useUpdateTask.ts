import React, { useState } from "react";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../../../shared/api";

export const useUpdateTask = (
  is_checked: boolean,
  id: number,
  title: string,
  description: string,
  created_at: string,
) => {
  const [checked, setChecked] = useState(is_checked);
  const [isEdit, setIsEdit] = useState(false);
  const [updateTask, setUpdateTask] = useState({
    id,
    title,
    created_at,
    description,
    is_checked: checked,
  });
  const [rtkUpdateTask] = useUpdateTaskMutation();
  const [removeTask] = useDeleteTaskMutation();

  const nameButton = isEdit ? " Сохранить" : " Редактировать";

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    rtkUpdateTask({
      id,
      title,
      created_at,
      description,
      is_checked: event.target.checked,
    });
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUpdateTask((prev) => ({
      ...prev,
      [name]: value,
      is_checked: checked,
    }));
  };

  const handleUpdateFields = () => {
    setIsEdit((prev) => !prev);

    if (title === updateTask.title || description === updateTask.description) {
      return;
    }

    rtkUpdateTask(updateTask);
  };

  const handleDeleteTask = () => {
    removeTask(id);
  };

  return {
    isEdit,
    checked,
    updateTask,
    nameButton,
    setUpdateTask,
    handleDeleteTask,
    handleChangeInput,
    handleUpdateFields,
    handleChangeCheckbox,
  };
};
