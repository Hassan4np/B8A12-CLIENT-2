import { useQuery } from "react-query";
import Heading from "../../GoolebalSecton/Heading";
import useAuth from "../../Hools/useAuth";
import useAxousSecret from "../../Hools/useAxousSecret";


const Review = () => {
    const { user } = useAuth()

    const axossect = useAxousSecret();
    const { data: review, isLoading } = useQuery({
        queryKey: ['review', user.email],
        queryFn: async () => {
            const res = await axossect.get(`/review`);
            console.log(res.data);
            const myreview = res?.data?.filter(item => item.email === user.email);
            return myreview
        }
    })
    if(isLoading){
        return <div className="text-center py-10"><span className="loading loading-bars loading-lg"></span></div>
    }
    return (
        <div>
            <Heading title="Review"></Heading>
           <div className="px-10">
           {
                review.map(item=><div key={item._id} className="border rounded-lg w-full px-10 py-10 space-y-3 bg-green-100">
                <h1 className="text-2xl font-bold">Title: {item?.title}</h1>
                <h4 className="text-lg font-medium">Agant Name: {item?.agentName}</h4>
                <h6 className="text-base font-normal"> Date: {item?.date}</h6>
                <p className="text-base text-gray-400">{item?.dec}</p>
            </div>)
            }
           </div>
        </div>
    );
};

export default Review;