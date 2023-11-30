import { Navigate, useLocation } from "react-router-dom";
import useAdminAgentUser from "../../Hools/useAdminAgentUser";
import useAuth from "../../Hools/useAuth";



const AdminPrivaterout = ({children}) => {
    const [isAdAgUs,isAdAgUsloading] = useAdminAgentUser();
    const {user,loading} = useAuth();
    const loc = useLocation();

    if(loading || isAdAgUsloading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user && (!loading && !isAdAgUsloading ) && isAdAgUs==='admin'){
        return children
    }
    return  <Navigate state={{from:loc}} replace to="/login"></Navigate>
};

export default AdminPrivaterout;