import { useQuery } from "react-query";
import Heading from "../../GoolebalSecton/Heading";
import useAxousSecret from "../../Hools/useAxousSecret";

const Userbought = () => {
    const axoussec = useAxousSecret();
    const { data, refetch } = useQuery({
        queryKey: ['boughts'],
        queryFn: async () => {
            const res = await axoussec.get(`/boughts`);
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            <Heading title="user Bought"></Heading>
            <div className="text-center">
                <button className="btn btn-sm bg-green-400 hover:bg-green-300">Pay</button>
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