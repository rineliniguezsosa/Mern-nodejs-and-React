import { useEffect,useState } from "react"
import { useLocation,useSearchParams } from "react-router-dom"
import { RegisterFormTypes,Usuario } from '../types/Datatypes'
import jwtDecode from 'jwt-decode';
import axios from "axios";

export const useActivateaccount = () => {
    const location = useLocation()
    const [searchParams] = useSearchParams();

    const [usuario, setUsuario] = useState<Usuario>({
        nombre:'',
        token:'',
        show:false
    })

    const { token,nombre } = usuario;

    const activate = async() => {
        try {
           const req = await axios.post("http://localhost:5000/api/auth/activa-tu-cuenta",{token:token})
           console.log(req.data)
        } catch (error) {
          console.log(error)
        }
    }
    
    return {

    }
}