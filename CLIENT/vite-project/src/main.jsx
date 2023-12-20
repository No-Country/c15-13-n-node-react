
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { ThemeProvider, createTheme } from "@mui/material"
import { FiltersProvider } from './context/filters.jsx'
import { CartProvider } from './context/cart.jsx'
import { BrowserRouter } from 'react-router-dom'

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
    <CartProvider>
      <FiltersProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FiltersProvider>
    </CartProvider>
  </ThemeProvider>,
)
