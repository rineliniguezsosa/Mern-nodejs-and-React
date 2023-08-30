import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import queryString from 'query-string';


export const Activate = () => {
  const location = useLocation()
  const { token } = queryString.parse(location.search)

  const activate = async(token = '') => {
    try {
       const req = await axios.post("http://localhost:5000/api/auth/registrarse",token)
    } catch (error) {
        
    }
  }

  useEffect(() => {
    console.log("this token change",token)
  }, [token])
  
  console.log(token)
  console.log(location)
  return (
    <div>Activate</div>
  )
}
