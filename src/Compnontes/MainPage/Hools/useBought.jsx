import { useQuery } from "react-query";
import useAxousSecret from "./useAxousSecret";


const useBought = () => {
    const axospublic = useAxousSecret();
    const {data:cards=[],refetch} = useQuery({
        queryKey:['boughts'],
        queryFn: async ()=>{
            const res = await  axospublic.get('/boughts');
            console.log(res.data);
            const accepced = res?.data?.filter(item=>item.status==='accepted')
            return accepced
           
        }
    })
   
    return [cards,refetch]
};

export default useBought;