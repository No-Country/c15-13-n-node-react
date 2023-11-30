//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import "./views"
import { Cart, Detail, Home, Login, Register } from './views'
import NavBar from './components/NavBar/NavBar'
import { Container } from '@mui/material'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </Container>

    </>
  )
}

export default App
