import { useQuery } from "react-query";
import useAxousPublic from "./useAxousPublic";

const useAllPropotismenu = () => {
    const axospublic = useAxousPublic();
 
    const {data:menus,refetch,isLoading} = useQuery({
        queryKey:['advertisement'],
        queryFn: async ()=>{
            const res = await  axospublic.get('/advertisement');
            console.log(res.data);
            return res.data          
        }
    })
   
    return [menus,refetch,isLoading]
};

export default useAllPropotismenu;