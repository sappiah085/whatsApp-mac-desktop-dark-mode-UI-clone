import ChatBar from "./components/chat/chat";
import "./App.css";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Grid container width="xl">
      <ChatBar />
      <Outlet />
    </Grid>
  );
}

export default App;
