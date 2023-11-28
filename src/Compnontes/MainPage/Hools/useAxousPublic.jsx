import axios from "axios";

export const axiospublic = axios.create({
    baseURL: 'https://b8-a12-backend.vercel.app'
  
  });

const useAxousPublic = () => {
    
    return axiospublic
};

export default useAxousPublic;
