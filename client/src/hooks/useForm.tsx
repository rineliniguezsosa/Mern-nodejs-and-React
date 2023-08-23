import { useState,ChangeEvent,FormEvent,SyntheticEvent } from 'react';
import { RegisterFormTypes,RegisterFormErrors  } from '../types/Datatypes';
import axios from 'axios'

export const useForm = (initialForm:RegisterFormTypes) =>{
    const [formState, setformState] = useState<RegisterFormTypes>(initialForm)
    const [open, setOpen] = useState(false) //gestiona el Snackbar
    const [mensaje,setMensaje] = useState<string>('')
    const [error,setErrors] = useState<RegisterFormErrors[]>([])
    console.log(error)
    const handlechange = (event:ChangeEvent<HTMLInputElement>) =>{
        const { name,value } = event.target
        setformState({
            ...formState,
            [name]:value
        })
    }

    const onSubmitFormRegistrar = async(event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        
        try{
            const response = await axios.post("http://localhost:5000/api/auth/registrarse",formState)
            setMensaje(response.data.mensaje)
            setOpen(true)
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
    const closeSnackbar = (event: SyntheticEvent | Event, reason?: string) =>{
        if(reason === 'clickaway'){
            return ;
        }
        setOpen(false)
    }

    return {
        ...formState,
        formState,
        handlechange,
        onSubmitFormRegistrar,
        onSubmitFormLogin,
        mensaje,
        error,
        open,
        closeSnackbar
    }
}
