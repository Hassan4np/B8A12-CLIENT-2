import { useQuery } from "react-query";
import useAxousPublic from "./useAxousPublic";


const useCategory = ({text}) => {
    const axospublic = useAxousPublic();
    console.log(text)
    const {data,isLoading} = useQuery({
        queryKey:['advertisement',text],
        queryFn: async ()=>{
            const res = await  axospublic.get('/advertisement');
            console.log(res.data);
            const verified = res?.data.filter(item=>item.status===text)
            return verified
           
        }
    })
   
    return data
};

export default useCategory;