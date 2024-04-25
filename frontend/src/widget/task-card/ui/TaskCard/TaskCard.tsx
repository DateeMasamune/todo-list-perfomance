import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import clsx from "clsx";
import { FC } from "react";
import { useUpdateTask } from "../../../../features/updateTask";
import styles from "./TaskCard.module.scss";

interface IProp {
  id: number;
  is_checked: boolean;
  title: string;
  description: string;
  created_at: string;
}

export const TaskCard: FC<IProp> = ({
  id,
  is_checked = false,
  title,
  description,
  created_at,
}) => {
  const {
    isEdit,
    checked,
    setIsEdit,
    updateTask,
    nameButton,
    handleChangeInput,
    handleChangeCheckbox,
  } = useUpdateTask(is_checked, id);

  const renderContent = () => {
    return !isEdit ? (
      <Box>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    ) : (
      <Box className={styles.inputContainer}>
        <TextField
          id="standard-basic"
          label="Название задачи"
          variant="standard"
          name="title"
          onChange={handleChangeInput}
        />
        <TextField
          id="standard-basic"
          label="Описание задачи"
          variant="standard"
          name="description"
          onChange={handleChangeInput}
        />
      </Box>
    );
  };

  return (
    <Box className={styles.wrapper}>
      <Card
        className={clsx({
          [styles.cardDisabled]: checked,
        })}
      >
        <CardContent className={styles.cardContainer}>
          <Typography variant="body2">Создано: {created_at}</Typography>
          {renderContent()}
          <FormControlLabel
            control={
              <Checkbox onChange={handleChangeCheckbox} checked={checked} />
            }
            label="Задание выполнено"
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setIsEdit((prev) => !prev);
              console.log("=======>updateTask", updateTask);
            }}
          >
            {nameButton}
          </Button>
          <Button variant="contained" size="small" onClick={() => {}}>
            Удалить
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
