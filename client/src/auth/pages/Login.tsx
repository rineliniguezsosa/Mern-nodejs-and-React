import { Grid,TextField,Button } from '@mui/material'
import { AuthLayout } from '../Layout'
import { useForm } from '../../hooks';


export const Login = () => {

  const { formState,handlechange } = useForm({
    email:'',
    password:''
  })
  
  return (
    <AuthLayout titulo="Login">
        <form>
          <Grid container sx={{width:{sm:450}}}>
              <Grid item xs={12} sx={{mt:2}}>
                    <TextField
                    name="email"
                    onChange={handlechange} 
                    fullWidth
                    type="text"
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
          </Grid>
        </form>
    </AuthLayout>
  )
}
