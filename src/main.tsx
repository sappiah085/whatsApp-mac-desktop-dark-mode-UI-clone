import ReactDOM from "react-dom/client";
import App from "./App";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/main/main";
import ChatContent from "./components/content/chatContent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ":id",
        element: <ChatContent />,
      },
    ],
  },
]);

function Theme() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      success: { main: "#009688" },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme />
  </React.StrictMode>
);
