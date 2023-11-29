import { useQuery } from "react-query";
import useAxousSecret from "./useAxousSecret";


const useAllProducts = () => {
    const axoussec = useAxousSecret();
 
    const {data:menus,refetch,isLoading} = useQuery({
        queryKey:['advertisement'],
        queryFn: async ()=>{
            const res = await  axoussec.get(`/advertisement/all`);
            console.log(res.data);
            return res.data          
        }
    })
   
    return [menus,refetch,isLoading]
};

export default useAllProducts;