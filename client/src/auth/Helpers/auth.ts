import axios from "axios";

export const activate = async(token = '') => {
    try {
       const req = await axios.post("http://localhost:5000/api/auth/registrarse",token)
    } catch (error) {
        
    }
}