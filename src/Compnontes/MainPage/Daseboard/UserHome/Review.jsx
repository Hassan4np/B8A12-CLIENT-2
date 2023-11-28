import { useQuery } from "react-query";
import Heading from "../../GoolebalSecton/Heading";
import useAuth from "../../Hools/useAuth";
import useAxousSecret from "../../Hools/useAxousSecret";
import Swal from "sweetalert2";


const Review = () => {
    const { user } = useAuth()

    const axossect = useAxousSecret();
    const { data: review, isLoading,refetch } = useQuery({
        queryKey: ['review', user.email],
        queryFn: async () => {
            const res = await axossect.get(`/review`);
            console.log(res.data);
            const myreview = res?.data?.filter(item => item.revieweremail=== user.email);
            return myreview
        }
    })
    if(isLoading){
        return <div className="text-center py-10"><span className="loading loading-bars loading-lg"></span></div>
    }
    const hendledelete=(id)=>{
        //todo
         axossect.delete(`/review/${id}`)
         .then(res=>{
            console.log(res.data);
            refetch()
            if(res.data.deletedCount>0){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Review delete Successfully ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
         })
         .catch(error=>{
            console.log(error)
         })
    };
    return (
        <div>
            <Heading title="Review"></Heading>
           <div className="px-10 space-y-3">
           {
                review.map(item=><div key={item._id} className="border rounded-lg w-full px-10 py-5 space-y-3 bg-green-100">
                <h1 className="text-2xl font-bold">Title: {item?.title}</h1>
                <h4 className="text-lg font-medium">Agant Name: {item?.agentName}</h4>
                <h6 className="text-base font-normal"> Date: {item?.date}</h6>
                <p className="text-base text-gray-400">{item?.dec}</p>
                <button onClick={()=>hendledelete(item._id)} className="btn bg-green-400">Removed</button>
            </div>)
            }
           </div>
        </div>
    );
};

export default Review;