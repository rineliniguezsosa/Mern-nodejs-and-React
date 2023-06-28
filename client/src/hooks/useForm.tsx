import { useState,ChangeEvent } from 'react';
import { RegisterFormTypes } from '../types/Datatypes';


export const useForm = (initialForm = {}) =>{
    const [formState, setformState] = useState(initialForm)

    const handlechange = (event:ChangeEvent<HTMLInputElement>) =>{
        const { name,value } = event.target
    }

    return {
        handlechange
    }
}