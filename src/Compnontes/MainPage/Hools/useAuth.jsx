import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProider";



const useAuth = () => {
    const authcontext = useContext(AuthContext);

    return authcontext;
};

export default useAuth;