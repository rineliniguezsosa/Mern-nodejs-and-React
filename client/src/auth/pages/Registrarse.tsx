import { Grid,TextField,Button,Snackbar,Typography } from '@mui/material'
import { AuthLayout } from '../Layout'
import { useForm } from '../../hooks'
import MuiAlert from '@mui/material/Alert';

export const Registrarse = () => {

  const { formState,handlechange,onSubmitFormRegistrar,mensaje,errors,open,closeSnackbar } = useForm({
    nombre:'',
    email:'',
    password:''
  })
  console.log("Los errors",errors)
  return (
    <AuthLayout titulo="Registrase">

      <form onSubmit={onSubmitFormRegistrar}>
        <Grid container sx={{width:{sm:450}}}>

            <Snackbar open={open} autoHideDuration={5000} onClose={closeSnackbar}>
                <MuiAlert onClose={closeSnackbar} variant='filled' severity="success">
                    <span>{mensaje}</span>
                </MuiAlert>
            </Snackbar>

            <Grid item xs={12} sx={{mt:2}}>
                <TextField
                name="nombre"
                onChange={handlechange}
                fullWidth
                type="text"
                placeholder="Nombre"
                value={formState.nombre}
                />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
                <TextField
                name="email"
                onChange={handlechange}
                fullWidth
                type="email"
                placeholder="Email"
                value={formState.email}
                />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
                <TextField
                name="password"
                onChange={handlechange}
                fullWidth
                type="password"
                placeholder="Password"
                value={formState.password}
                />
            </Grid>

            {errors.map((e,index)=>(
                <Grid key={index} item xs={12} sx={{mt:1}}>
                  <Typography className="text-red-500 text-[17px] font-sans" variant="h5" sx={{fontFamily:'sans-serif',color:'red',fontSize:17}}>{e.msg}</Typography>
                </Grid>
            ))}

            <Grid item xs={12} sx={{mt:2}}>
                <Button type="submit" fullWidth variant="contained">Registrar</Button>
            </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
