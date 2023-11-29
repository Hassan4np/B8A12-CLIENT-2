import { useQuery } from "react-query";
import useAxousPublic from "./useAxousPublic";

const useAllPropotismenu = (search) => {
    const axospublic = useAxousPublic();
 
    const {data:menus,refetch,isLoading} = useQuery({
        queryKey:['advertisement',search],
        queryFn: async ()=>{
            const res = await  axospublic.get(`/advertisement?search=${search}`);
            console.log(res.data);
            return res.data          
        }
    })
   
    return [menus,refetch,isLoading]
};

export default useAllPropotismenu;