import { Grid,TextField,Button } from '@mui/material'
import { AuthLayout } from '../Layout'
import { useForm } from '../../hooks'



export const Registrarse = () => {

  const { formState,handlechange,onSubmitFormRegistrar,mensaje } = useForm({
    nombre:'',
    email:'',
    password:''
  })
  console.log(mensaje)

  return (
    <AuthLayout titulo="Registrase">

      <form onSubmit={onSubmitFormRegistrar}>
        <Grid container sx={{width:{sm:450}}}>
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

            <Grid item xs={12} sx={{mt:2}}>
                <Button type="submit" fullWidth variant="contained">Registrar</Button>
            </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
