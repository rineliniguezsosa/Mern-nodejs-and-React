import { Routes,Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Navbar } from '../Layout/Navbar';
import { Registrarse } from '../pages/Registrarse';

export const Authroutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/registrarse" element={<Registrarse/>}/>
    </Routes>
    </>
  )
}
