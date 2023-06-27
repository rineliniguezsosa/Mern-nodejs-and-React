import { Grid,Typography,TextField,Button } from '@mui/material'
import { AuthLayout } from '../Layout'
import { useForm } from '../../hooks'


export const Registrarse = () => {
  return (
    <AuthLayout titulo="Registrase">
      
      <form>
        <Grid container sx={{width:{sm:450}}}>
            <Grid item xs={12} sx={{mt:2}}>
                <TextField
                name="nombre"
                onChange={handlechange} 
                fullWidth
                />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
                <TextField
                name="email"
                onChange={handlechange}  
                fullWidth
                />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
                <TextField
                name="password"
                onChange={handlechange}  
                fullWidth
                />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
                <Button fullWidth variant="contained">Registrar</Button>
            </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
