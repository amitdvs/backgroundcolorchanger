import { createTheme, ThemeProvider } from "@mui/material";
import { blue, orange, yellow } from "@mui/material/colors";
import Page from "./Page";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: blue[900],
    },
  },
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page title={"some random text"} />
    </ThemeProvider>
  );
}

export default App;
