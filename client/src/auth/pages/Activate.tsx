/* eslint-disable react-hooks/exhaustive-deps */
import { Grid,Button,Snackbar } from '@mui/material'
import { useActivateaccount } from '../../hooks'
import MuiAlert from '@mui/material/Alert';

export const Activate = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams();
  //const [decodetoken, setdecodeToken] = useState<RegisterFormTypes | null>(null)
  //console.log(decodetoken)
  
  const [usuario, setUsuario] = useState<Usuario>({
    nombre:'',
    token:'',
    show:false
  })
  console.log(usuario);
  const { token,nombre } = usuario;

  const activate = async() => {
    try {
       const req = await axios.post("http://localhost:5000/api/auth/activa-tu-cuenta",{token:token})
       console.log(req.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    const token = searchParams.get('token');
    if(token){
      try{
        const tokendecode: RegisterFormTypes = jwtDecode(token as string); //decode payload
        const { nombre } = tokendecode;
        console.log(tokendecode)
        setUsuario({...usuario,nombre:nombre,token:token,show:true})
        //setdecodeToken(tokendecode);
      }catch(error){
        console.log(error)
      }
    } 
  }, [location.search])
  const { nombre,activate } = useActivateaccount()
  return (
    <Grid container className="h-screen flex flex-col justify-center items-center">

      {/* snackbar */}
      <Snackbar open={open} autoHideDuration={5000} onClose={closeSnackbar}>
            <MuiAlert onClose={closeSnackbar} variant='filled' severity="success">
                <span>{mensaje}</span>
            </MuiAlert>
      </Snackbar>

      <Grid container sx={{width:{sm:450}}}>

        <Grid item xs={12}>
            <span className="font-sans font-bold text-[20px] text-center">¡Bienvenido de vuelta <span className='text-colorapp'>{nombre}</span>! Haz clic para activar tu cuenta ahora mismo.
            </span>
        </Grid>

        <Grid item xs={12} className="grid justify-items-center items-center p-2">
          <Button onClick={activate} variant="outlined">Activa tu cuenta</Button>
        </Grid>

      </Grid>

    </Grid>
  )
}
