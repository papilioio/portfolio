import { createTheme } from '@material-ui/core/styles'
const theme = createTheme({
    typography: {
        "fontFamily": "\"'Noto Sans', sans-serif\"",
    },
    palette: {
        primary: {
          main: "#4756EF",
          dark: "#689F38",
          light: "#47F6FF"
        },
        secondary: {
          main: "#777777"
        },
        text: {
          primary: "#212121",
          secondary: "#757575"
        }
      }
    }
)
export default theme