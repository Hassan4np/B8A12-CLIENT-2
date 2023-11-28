import { useQuery } from "react-query";
import Heading from "../../GoolebalSecton/Heading";
import useAxousSecret from "../../Hools/useAxousSecret";
import { Link } from "react-router-dom";
import useAuth from "../../Hools/useAuth";

const Userbought = () => {
    const axoussec = useAxousSecret();
    const {user} = useAuth();
    const { data, isLoading } = useQuery({
        queryKey: ['boughts',user.email],
        queryFn: async () => {
            const res = await axoussec.get(`/boughts/user/${user.email}`);
            console.log(res.data)
            return res.data
        }
    })
    if(isLoading){
        return <div className="text-center py-10"><span className="loading loading-bars loading-lg"></span></div>
    }
    const paybutton = data?.map(item => item.status === 'accepted');
    return (
        <div>
            <Heading title="user Bought"></Heading>
            <div className="text-center">
                {
                paybutton ? <Link to='/daseboard/payment'><button className="btn btn-sm bg-green-400 hover:bg-green-300">Pay</button></Link>:
                <button  disabled className="btn btn-sm bg-green-400 hover:bg-green-100">Pay</button>
                }

                
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Img</th>
                                <th>Title</th>
                                <th>Loaction</th>
                                <th>Agent Name</th>
                                <th>Make offer</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((it, idx) => <tr key={it._id}>
                                    <th>{idx + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={it?.image} />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{it?.title}</td>
                                    <td>{it?.location}</td>
                                    <td>{it?.AgentName}</td>

                                    <td>{it?.price} tk</td>
                                    <td>{it?.status}</td>


                                </tr>)
                            }




                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Userbought;