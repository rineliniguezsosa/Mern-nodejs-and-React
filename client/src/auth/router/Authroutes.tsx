import { Routes,Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Navbar } from '../Layout/Navbar';

export const Authroutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}
