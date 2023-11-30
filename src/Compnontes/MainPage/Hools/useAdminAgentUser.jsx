import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxousSecret from "./useAxousSecret";

const useAdminAgentUser = () => {
    const { user, loading } = useAuth();
    const axoussec = useAxousSecret();
    const { data: isAdAgUs, isPending: isAdAgUsloading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axoussec.get(`/users/admin/${user?.email}`);
            console.log(res.data)
            return res.data;

        }

    })

    return [isAdAgUs, isAdAgUsloading]

};

export default useAdminAgentUser;