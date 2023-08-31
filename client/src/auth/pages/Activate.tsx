import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import queryString from 'query-string';
import axios from "axios";

export const Activate = () => {
  const location = useLocation()
  const { token }: {token?:string} = queryString.parse(location.search)

  const activate = async(token = '') => {
    try {
       const req = await axios.post("http://localhost:5000/api/auth/activa-tu-cuenta",{token:token})
    } catch (error) {
  
    }
  }

  useEffect(() => {
     activate(token)  
  }, [token])
  
  console.log(token)
  console.log(location)
  return (
    <div>Activate</div>
  )
}
