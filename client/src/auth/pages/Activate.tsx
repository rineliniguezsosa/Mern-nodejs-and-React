import { Grid,Button,Snackbar,CircularProgress } from '@mui/material'
import { useActivateaccount } from '../../hooks'
import MuiAlert from '@mui/material/Alert';

export const Activate = () => {
  
  const { nombre,activate,closeSnackbar,open,mensaje } = useActivateaccount()

  return (
    <Grid container className="h-screen flex flex-col justify-center items-center">

      {/* snackbar */}
      <Snackbar open={open} autoHideDuration={5000} onClose={closeSnackbar}>
            <MuiAlert onClose={closeSnackbar} variant='filled' severity="success">
                <span>{mensaje}</span>
            </MuiAlert>
      </Snackbar>

      {/* snackbar errors */}
      <Snackbar open={open} autoHideDuration={5000} onClose={closeSnackbar}>
            <MuiAlert onClose={closeSnackbar} variant='filled' severity="error">
                <span>{mensaje}</span>
            </MuiAlert>
      </Snackbar>

       {/* Activa tu cuenta */}
      {nombre ? 
      <Grid container sx={{width:{sm:450}}}>

        <Grid item xs={12}>
            <span className="font-sans font-bold text-[20px] text-center">¡Bienvenido de vuelta <span className='text-colorapp'>{nombre}</span>! Haz clic para activar tu cuenta ahora mismo.
            </span>
        </Grid>

        <Grid item xs={12} className="grid justify-items-center items-center p-2">
          <Button onClick={activate} variant="outlined">Activa tu cuenta</Button>
        </Grid>

      </Grid>
      : <CircularProgress />
      }

    </Grid>
  )
}
