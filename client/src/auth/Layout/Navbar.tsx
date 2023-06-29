import { AppBar,Toolbar,Typography,Button,Stack } from '@mui/material'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant="h6" component="div">Rinel Iñi.</Typography>

            <Stack direction="row" sx={{flexGrow:1,display:'flex',justifyContent:'center'}} spacing={2}>
                <Link to="/"><Button sx={{color:'white'}}>Home</Button></Link>

                <Link to="/auth/registrarse"><Button sx={{color:'white'}}>Registrarse</Button></Link>

                <Link to="/auth/login"><Button sx={{color:'white'}}>Login</Button></Link>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}