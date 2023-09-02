/* eslint-disable react-hooks/exhaustive-deps */
import { Grid,Typography,Button } from '@mui/material'
import { useEffect,useState } from "react"
import { useLocation,useSearchParams } from "react-router-dom"
import { RegisterFormTypes,Usuario } from '../../types/Datatypes'
import jwtDecode from 'jwt-decode';
import axios from "axios";

export const Activate = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams();
  //const [decodetoken, setdecodeToken] = useState<RegisterFormTypes | null>(null)
  //console.log(decodetoken)
  
  const [usuario, setUsuario] = useState<Usuario>({
    nombre:'',
    token:'',
    show:false
  })
  console.log(usuario);
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
  
  return (
    <Grid container className="h-screen border-black border-2 flex flex-col justify-center items-center">
      <Grid container sx={{width:{sm:450}}}>

        <Grid item xs={12} className="border-black border-2">
            <span className="font-sans font-bold text-[20px] text-center">¡Bienvenido de vuelta <span className='text-blue-600/100'>{nombre}</span>! Haz clic para activar tu cuenta ahora mismo.
            </span>
        </Grid>

        <Grid item xs={12} className="grid justify-items-center items-center">
          <Button onClick={activate} variant="outlined">Activa tu cuenta</Button>
        </Grid>

      </Grid>

    </Grid>
  )
}
