import { useQuery } from "react-query";
import Heading from "../../GoolebalSecton/Heading";
import useAxousSecret from "../../Hools/useAxousSecret";



const Allreview = () => {
    const asxossecer = useAxousSecret();
    const {data:reviews,isLoading,refetch} = useQuery({
        queryKey:['review'],
        queryFn: async ()=>{
            const res = await  asxossecer.get(`/review`);
            console.log(res.data);
            return res.data
           
        }
    });
if(isLoading){
    return <div className="text-center m-10"><span className="loading loading-bars loading-lg"></span></div>
}
    const hendledelete=(id)=>{
        console.log(id)
        asxossecer.delete(`/review/${id}`)
        .then(res => {
            console.log(res.data);
            refetch()
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <Heading title="all review"></Heading>
            <div>
            <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Agent Name</th>
                                <th>removed</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews?.map((it, idx) => <tr key={it._id}>
                                    <th>{idx + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={it?.reviewerimg} />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{it?.reviewername}</td>
                                    <td>{it?.revieweremail}</td>                              
                                    <td>{it?.agentName}</td>                              
                                    <th className=""><button onClick={() => hendledelete(it?._id)} className="btn btn-sm  bg-green-200">Remove</button></th>

                                </tr>)
                            }




                        </tbody>

                    </table>
            </div>
            </div>
        </div>
    );
};

export default Allreview;