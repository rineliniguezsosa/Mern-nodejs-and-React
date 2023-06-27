import { Routes,Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Navbar } from '../Layout/Navbar';

export const Authroutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}
