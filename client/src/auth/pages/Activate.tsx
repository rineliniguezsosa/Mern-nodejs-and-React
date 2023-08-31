import { useEffect,useState } from "react"
import { useLocation } from "react-router-dom"
import queryString from 'query-string';
import axios from "axios";

export const Activate = () => {
  const location = useLocation()
  const { token }: {token?:string} = queryString.parse(location.search)

  const activate = async(token = '') => {
    try {
       const req = await axios.post("http://localhost:5000/api/auth/activa-tu-cuenta",{token:token})
       console.log(req.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(token){
     activate(token) 
    } 
  }, [token])
  
  console.log(token)
  console.log(location)
  return (
    <div className="container mx-auto h-screen border-black border-2">
      <span>sjsdj</span>
    </div>
  )
}
