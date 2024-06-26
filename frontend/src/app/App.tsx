import Box from "@mui/material/Box";
import { MainPage } from "../pages/main";
import "./styles/normalize.css";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <Box className={styles.container}>
      <MainPage />
    </Box>
  );
}

export default App;
