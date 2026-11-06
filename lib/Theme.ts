import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4C4541",
      light: "#756C66",
      dark: "#302B28",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F2C46A",
      contrastText: "#4C4541",
    },
 
  },

  typography: {
    fontFamily: '"YekanBakh", Tahoma, Arial, sans-serif',
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;