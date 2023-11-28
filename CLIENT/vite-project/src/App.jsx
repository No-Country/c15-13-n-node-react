//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import "./views"
import { Cart, Detail, Home, Login, Register } from './views'
import NavBar from './components/NavBar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App
