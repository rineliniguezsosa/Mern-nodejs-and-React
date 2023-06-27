import { Grid,Typography } from "@mui/material"
import { AuthLayoutprops } from '../../types/Datatypes';


export const AuthLayout = ({children,titulo}:AuthLayoutprops) => {
  return (
    <Grid container spacing={0} mt={5} direction="column" alignItems='center' justifyContent='center'>
      
      <Grid item xs={3} sx={{borderRadius:2,width:{sm:450}}}>
          <Typography variant="h5" mb={1}>{titulo}</Typography>
      </Grid>
      
      {children}
    </Grid>
  )
}
