import { Navigate, useLocation,  } from "react-router-dom";
import useAuth from "../Hools/useAuth";



const PrivateRout = ({children}) => {
const loc = useLocation();
    const {user,loading} = useAuth();
    if(loading){
        return <div className=" flex justify-center items-center mt-10"><span className="loading loading-bars loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    // return  <Navigate state={{loc?.pathname}} to="/login"></Navigate>
    return  <Navigate state={{from:loc}} replace to="/login"></Navigate>
};

export default PrivateRout;