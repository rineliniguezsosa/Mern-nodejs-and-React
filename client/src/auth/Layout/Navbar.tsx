import { AppBar,Toolbar,Typography,Button,Stack } from '@mui/material'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant="h6" component="div">Rinel Iñi.</Typography>

            <Stack direction="row" spacing={2}>

            </Stack>
        </Toolbar>
    </AppBar>
  )
}
