import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Acount, Admin, Cart, Contacto, Detail, Home, Login, Nosotros, Product, Register, CheckoutSuccess } from './views'
import NavBar from './components/NavBar/NavBar'
import { ProtectedRoute } from './components/Protected/ProtectedRoute'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useEffect } from 'react'



function App() {
  const [user, setUser] = useLocalStorage('user', {});

  useEffect(() => {
    console.log(user);
  }, [user])

  return (


    <>
      <NavBar user={user} />
      <div className='w-full h-full flex flex-col items-start py-10'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail user={user} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Product user={user} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route element={<ProtectedRoute isAllowed={!!user.token} redirectTo='/register' />}>
            <Route path='/acount' element={<Acount user={user} setUser={setUser} />} />
            <Route path="/cart" element={<Cart user={user} />} />
            <Route path="/checkout-success" element={<CheckoutSuccess user={user} />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={!!user.token /* && user.role === 'admin' */} redirectTo='/login' />}>
            <Route path='/admin' element={<Admin user={user} />} />
          </Route>
        </Routes>
      </div>
    </>


  )
}

export default App
