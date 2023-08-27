import { Routes,Route } from 'react-router-dom'
import { Navbar } from '../Layout';
import { Activate,Login,Registrarse,Home } from '../pages';


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
