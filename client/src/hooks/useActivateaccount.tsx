/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState } from "react"
import { useLocation,useSearchParams } from "react-router-dom"
import { RegisterFormTypes,Usuario } from '../types/Datatypes'
import jwtDecode from 'jwt-decode';
import axios from "axios";

export const useActivateaccount = () => {
    const location = useLocation()
    const [searchParams] = useSearchParams();
    const [open, setOpen] = useState(false) //gestiona el Snackbar

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
    
    useEffect(() => {
        const token = searchParams.get('token');
        if(token){
          try{
            const tokendecode: RegisterFormTypes = jwtDecode(token as string); //decode payload
            const { nombre } = tokendecode;
            console.log(tokendecode)
            setUsuario({...usuario,nombre:nombre,token:token,show:true})
            //setdecodeToken(tokendecode);
          }catch(error){
            console.log(error)
          }
        } 
      }, [location.search])

    //oculta el componente Snackbar
    const closeSnackbar = () =>{
        setOpen(false)
    }

    return {
        nombre,
        activate,
        closeSnackbar
    }
}