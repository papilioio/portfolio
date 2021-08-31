import { createTheme } from '@material-ui/core/styles'
const theme = createTheme({
  typography: {
    "fontFamily": "\"'Noto Sans', sans-serif\"",
  },
  palette: {
    background: {
      default: '#000',
    },
    primary: {
      main: "#FFFFFF",
      dark: "#FFFFFF",
      light: "#000000"
    },
    secondary: {
      main: "#777777"
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#cccccc"
    },
  }
}
)
export default theme