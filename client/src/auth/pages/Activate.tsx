import { Grid,Typography,Button } from '@mui/material'
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
