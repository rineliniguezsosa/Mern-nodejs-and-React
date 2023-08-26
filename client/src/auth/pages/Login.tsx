import { Grid,TextField,Button,Typography } from '@mui/material'
import { AuthLayout } from '../Layout'
import { useForm } from '../../hooks';


export const Login = () => {

  const { formState,handlechange,onSubmitFormLogin,errors } = useForm({
    email:'',
    password:''
  })
  
  return (
    <AuthLayout titulo="Login">
        <form onSubmit={onSubmitFormLogin}>
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

                {/* errors */}
                {errors.map((e,index)=>(
                <Grid key={index} item xs={12} sx={{mt:1}}>
                  <Typography variant="h5" sx={{fontFamily:'sans-serif',color:'red',fontSize:17}}>{e.msg}</Typography>
                </Grid>
                ))}

                <Grid item xs={12} sx={{mt:2}}>
                    <Button type="submit" fullWidth variant="contained">Login</Button>
                </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
