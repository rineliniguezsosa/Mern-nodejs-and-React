import { useState,ChangeEvent } from 'react';
import { RegisterFormTypes } from '../types/Datatypes';
import { FormEvent } from 'react';
import axios from 'axios'

export const useForm = (initialForm:RegisterFormTypes) =>{
    const [formState, setformState] = useState<RegisterFormTypes>(initialForm)
    const [mensaje,setMensaje] = useState('')
    console.log(formState)
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
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
        
    }

    const onSubmitFormLogin = async(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        
        try{
            const response = await axios.post("http://localhost:5000/api/auth/login",formState)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }

    return {
        ...formState,
        formState,
        handlechange,
        onSubmitFormRegistrar,
        onSubmitFormLogin,
        mensaje,
    }
}
