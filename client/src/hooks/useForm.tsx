import { useState } from 'react';
import { RegisterFormTypes } from '../types/Datatypes';


export const useForm = (initialForm = {}) =>{
    const [formState, setformState] = useState(initialForm)

    const handlechange = () =>{

    }

    return {
        handlechange
    }
}