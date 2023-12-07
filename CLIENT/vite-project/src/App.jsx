//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Cart, Contacto, Detail, Home, Login, Nosotros, Product, Register } from './views'
import NavBar from './components/NavBar/NavBar'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className='w-full h-full flex flex-col items-start py-10'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </div>

    </>
  )
}

export default App
