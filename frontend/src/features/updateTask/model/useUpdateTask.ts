import React, { useState } from "react";

export const useUpdateTask = (is_checked: boolean, id: number) => {
  const [checked, setChecked] = useState(is_checked);
  const [isEdit, setIsEdit] = useState(false);
  const [updateTask, setUpdateTask] = useState({ id, is_checked: checked });

  const nameButton = isEdit ? " Сохранить" : " Редактировать";

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log("=======>id", id);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUpdateTask((prev) => ({
      ...prev,
      [name]: value,
      is_checked: checked,
    }));
  };

  return {
    isEdit,
    checked,
    setIsEdit,
    updateTask,
    nameButton,
    setUpdateTask,
    handleChangeInput,
    handleChangeCheckbox,
  };
};
