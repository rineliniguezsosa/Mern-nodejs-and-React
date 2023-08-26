/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState,ChangeEvent,FormEvent } from 'react';
import { RegisterFormTypes,RegisterFormErrors  } from '../types/Datatypes';
import axios from 'axios'

export const useForm = (initialForm:RegisterFormTypes) =>{
    const [formState, setformState] = useState<RegisterFormTypes>(initialForm)
    const [open, setOpen] = useState(false) //gestiona el Snackbar
    const [mensaje,setMensaje] = useState<string>('')
    const [errors,setErrors] = useState<RegisterFormErrors[] | []>([])
    console.log(errors)
    const handlechange = (event:ChangeEvent<HTMLInputElement>) =>{
        const { name,value } = event.target
        setformState({
            ...formState,
            [name]:value
        })
    }

    useEffect(()=>{ 
        setErrors(errors);
    },[errors.length > 0])

    const onSubmitFormRegistrar = async(event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        
        try{
            const response = await axios.post("http://localhost:5000/api/auth/registrarse",formState)
            setMensaje(response.data.mensaje)
            setOpen(true)
            setErrors([])
        }catch(error:any){
            setErrors(error.response.data.errors)

        }

        setformState({nombre:'',email:'',password:''})
    }

    const onSubmitFormLogin = async(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        
        try{
            const response = await axios.post("http://localhost:5000/api/auth/login",formState)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }

        setformState({email:'',password:''})
    }

    //oculta el componente Snackbar
    const closeSnackbar = () =>{
        setOpen(false)
    }

    return {
        ...formState,
        formState,
        handlechange,
        onSubmitFormRegistrar,
        onSubmitFormLogin,
        mensaje,
        errors,
        open,
        closeSnackbar
    }
}
