import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Admin, Cart, Contacto, Detail, Home, Login, Nosotros, Product, Register } from './views'
import NavBar from './components/NavBar/NavBar'
import { ProtectedRoute } from './components/Protected/ProtectedRoute'
import { useState } from 'react'


function App() {
  const [user, setUser] = useState(null);

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
          <Route path="/productos" element={<Product />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={!!user && user.role === 'admin'} redirectTo='/login' />}>
            <Route path='/admin' element={<Admin />} />
          </Route>
        </Routes>

      </div>
    </>


  )
}

export default App
