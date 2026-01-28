import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3A86F3",
    },
    background: {
      default: "#05091A",
      paper: "#0F172A",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

export default theme;
