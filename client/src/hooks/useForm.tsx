import { useState,ChangeEvent } from 'react';
import { RegisterFormTypes } from '../types/Datatypes';


export const useForm = (initialForm:RegisterFormTypes) =>{
    const [formState, setformState] = useState<RegisterFormTypes>(initialForm)
    console.log(formState)
    const handlechange = (event:ChangeEvent<HTMLInputElement>) =>{
        const { name,value } = event.target
        setformState({
            ...formState,
            [name]:value
        })
    }

    const onSubmitForm = async(event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        try{
          const req = await fetch(`${process.env.SERVER}/registrarse`,{method:'POST',body:JSON.stringify(formState)})
          const resp = await req.json()
        }
        catch(error){
  
        }
    }
    return {
        ...formState,
        formState,
        handlechange
    }
}