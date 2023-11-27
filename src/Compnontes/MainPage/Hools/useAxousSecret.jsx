
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";


export const axiossecret = axios.create({
  baseURL: 'http://localhost:5000'

});

const useAxousSecret = () => {
    // const nagigate = useNavigate()
    // const {UserLogout} = useAuth()
    // axiossecret.interceptors.request.use(function (config) {
    //   const token = localStorage.getItem('access-token');
    //   // console.log('resuest stopped by intercepote', token);
    //   config.headers.authorization = `Bearer ${token}`
    //   return config
    // }, function (error) {
    //   return Promise.reject(error)
    // })
  
    
    // axiossecret.interceptors.response.use(function (response) {
    //   return response
    // }, async(error) => {
    //   const status = error.response.status
    //   // console.log("status errro in the intersapter", status)
    //   if (status === 401 || status === 403) {
    //     await UserLogout()
    //     nagigate('/login')
    //   }
    //   return Promise.reject(error)
    // })
    return axiossecret
  };
  


export default useAxousSecret;