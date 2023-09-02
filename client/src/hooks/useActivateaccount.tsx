import { useEffect,useState } from "react"
import { useLocation,useSearchParams } from "react-router-dom"
import { RegisterFormTypes,Usuario } from '../types/Datatypes'
import jwtDecode from 'jwt-decode';
import axios from "axios";

export const useActivateaccount = () => {
    const location = useLocation()
    const [searchParams] = useSearchParams();
    
    return {

    }
}