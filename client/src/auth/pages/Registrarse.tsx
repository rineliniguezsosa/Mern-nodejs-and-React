import { Grid,Typography,TextField } from '@mui/material'
import { AuthLayout } from '../Layout'

export const Registrarse = () => {
  return (
    <AuthLayout titulo="Registrase">
      
      <form>
        <Grid container>
            <Grid item xs={12} sx={{mt:2,width:{sm:450}}}>
                <TextField
                name="nombre" 
                fullWidth
                />
            </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
