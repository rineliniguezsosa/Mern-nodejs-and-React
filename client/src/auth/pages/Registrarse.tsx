import { Grid,TextField,Button } from '@mui/material'
import { AuthLayout } from '../Layout'
import { useForm } from '../../hooks'
import { FormEvent } from 'react';


export const Registrarse = () => {

  const { formState,handlechange } = useForm({
    nombre:'',
    email:'',
    password:''
  })

  const onSubmitForm = async(event:FormEvent<HTMLFormElement>) =>{
      event.preventDefault()
      const req = await fetch(`${process.env.SERVER}/registrarse`,{method:'POST',body:JSON.stringify(formState)})
  }

  return (
    <AuthLayout titulo="Registrase">
      
      <form onSubmit={onSubmitForm}>
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
