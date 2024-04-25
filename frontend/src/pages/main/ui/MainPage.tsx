import Box from "@mui/material/Box";
import { CreateTask } from "../../../widget/create-task";
import { TodoList } from "../../../widget/todo-list/ui/TodoList";

export const MainPage = () => {
  return (
    <Box>
      <CreateTask />
      <TodoList />
    </Box>
  );
};
