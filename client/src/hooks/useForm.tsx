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

    return {
        ...formState,
        formState,
        handlechange
    }
}