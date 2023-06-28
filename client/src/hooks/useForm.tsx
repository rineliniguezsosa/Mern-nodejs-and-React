import { useState } from 'react';
import { RegisterForm } from '../types/Datatypes';


export const useForm = (initialForm = {}) =>{
    const [formState, sEtformState] = useState(initialForm)

    return {

    }
}