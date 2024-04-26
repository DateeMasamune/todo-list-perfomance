import { Box, CircularProgress } from "@mui/material";
import { useGetTodoListQuery } from "../../../shared/api";
import { TaskCard } from "../../task-card";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const { isLoading, data = [] } = useGetTodoListQuery(null);

  if (isLoading) {
    return (
      <Box className={styles.loader}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className={styles.container}>
      {data.map(
        ({ id, is_checked, title, description, actualDate, created_at }) => (
          <TaskCard
            id={id}
            key={id}
            title={title}
            created_at={created_at}
            actualDate={actualDate}
            is_checked={is_checked}
            description={description}
          />
        ),
      )}
    </Box>
  );
};
