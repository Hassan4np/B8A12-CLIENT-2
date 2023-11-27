import { useQuery } from "react-query";
import useAxousSecret from "./useAxousSecret";


const useReview = ({email}) => {
    const axospublic = useAxousSecret();
    const {data:review=[],isLoading} = useQuery({
        queryKey:['review',email],
        queryFn: async ()=>{
            const res = await  axospublic.get(`/review/${email}`);
            console.log(res.data);
            return res.data
           
        }
    })
   
    return [review,isLoading]
};

export default useReview;