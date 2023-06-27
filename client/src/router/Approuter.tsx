import { Routes,Route,Navigate } from 'react-router-dom'
import { Authroutes } from '../auth/router/Authroutes'

export const Approuter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<Authroutes/>}/>

        <Route path="/*" element={<Navigate to="/auth/"/>}/>
    </Routes>
  )
}
