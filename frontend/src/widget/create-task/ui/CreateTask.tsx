import { Box, Button, CardActions, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useCreateTask } from "../../../features/create-task";
import styles from "./CreateTask.module.scss";

export const CreateTask = () => {
  const { open, handleClose, handleChangeTask, handleOpen, handleCreateTask } =
    useCreateTask();

  return (
    <>
      <Box className={styles.buttonContainer}>
        <Button
          className={styles.newTask}
          variant="contained"
          onClick={handleOpen}
        >
          Добавить задачу
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modalContainer}>
          <TextField
            id="standard-basic1"
            label="Название задачи"
            variant="standard"
            name="title"
            onChange={handleChangeTask}
          />
          <TextField
            id="standard-basic"
            label="Описание задачи"
            variant="standard"
            name="description"
            onChange={handleChangeTask}
          />
          <CardActions>
            <Button variant="contained" onClick={handleCreateTask}>
              Создать
            </Button>
          </CardActions>
        </Box>
      </Modal>
    </>
  );
};
