import { Routes,Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Navbar } from '../Layout/Navbar';
import { Activate,Login,Registrarse } from '../pages';


export const Authroutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/registrarse" element={<Registrarse/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/activate:token" element={<Activate/>}/>
    </Routes>
    </>
  )
}
