import { Grid,Typography,Button } from '@mui/material'
import { useEffect,useState } from "react"
import { useLocation,useSearchParams } from "react-router-dom"
import { RegisterFormTypes } from '../../types/Datatypes'
import jwtDecode from 'jwt-decode';
import axios from "axios";

export const Activate = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams();
  const [decodetoken, setdecodeToken] = useState<RegisterFormTypes | null>(null)
  console.log(decodetoken)
  const token = searchParams.get('token');
 
  const [usuario, setUsuario] = useState({
    nombre:'',
    token:'',
    show:true
  })
  console.log(usuario);

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
      //const { nombre } = jwt.decode(token) as JwtPayload; //decode payload 
    } 
  }, [location.search])
  
  console.log(token)
  console.log(location)
  return (
    <Grid container className="h-screen border-black border-2 flex flex-col justify-center items-center">
      <Grid container sx={{width:{sm:450}}}>

        <Grid item xs={12} className="border-black border-2">
            <Typography className="font-sans font-bold text-[15px] text-center">¡Bienvenido de vuelta rinel! Haz clic para activar tu cuenta ahora mismo.</Typography>
        </Grid>

        <Grid item xs={12} className="grid justify-items-center items-center">
          <Button variant="outlined">Activa tu cuenta</Button>
        </Grid>

      </Grid>

    </Grid>
  )
}
