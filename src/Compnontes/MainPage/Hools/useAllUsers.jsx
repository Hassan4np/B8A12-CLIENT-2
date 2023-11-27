
import { useQuery } from "react-query";
import useAxousSecret from "./useAxousSecret";


const useAllUsers = () => {
    const axousseret = useAxousSecret();
    const {data:users,isLoading,refetch} = useQuery({
        queryKey:['users',],
        queryFn: async ()=>{
            const res = await  axousseret.get('/users');
            console.log(res.data)
            return res.data
           
        }
    })
   
    return [users,isLoading,refetch]
};

export default useAllUsers;