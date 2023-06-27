import { Grid,Typography } from "@mui/material"
import { AuthLayoutprops } from '../../types/Datatypes';


export const AuthLayout = ({children,titulo}:AuthLayoutprops) => {
  return (
    <Grid container spacing={0} direction="column" alignItems='center' justifyContent='center' sx={{border:'1px red solid'}}>
      
      <Grid item xs={3} sx={{border:'1px red solid',padding:3,borderRadius:2,width:{sm:450}}}>
          <Typography variant="h5" mb={1}>Registrarse</Typography>
      </Grid>

    </Grid>
  )
}
