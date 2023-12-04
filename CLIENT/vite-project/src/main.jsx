
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './styles/index.css'
import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#white"
      }

    }

  }
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
