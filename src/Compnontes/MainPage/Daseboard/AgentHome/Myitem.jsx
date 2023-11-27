import Heading from "../../GoolebalSecton/Heading";
import { useQuery } from "react-query";
import useAxousSecret from "../../Hools/useAxousSecret";
import useAuth from "../../Hools/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Myitem = () => {
    const axoussec = useAxousSecret();
    const { user } = useAuth();
    const { data, refetch } = useQuery({
        queryKey: ['', user.email],
        queryFn: async () => {
            const res = await axoussec.get(`/advertisement/agent/${user.email}`);
            console.log(res.data)
            return res.data
        }
    });
    const hendledelete = (id) => {
        console.log(id)
        axoussec.delete(`/advertisement/${id}`)
        .then(res=>{
            console.log(res.data)
            refetch()
            if(res.data.deletedCoun>0){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Item delete Successfully ',
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
            <Heading title="my item"></Heading>
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
                                <th>Agent img</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>update</th>
                                <th>Removed</th>
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
                                    <td>{it?.location_name}</td>
                                    <td>{it?.agent_name}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={it?.agent_img} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{it?.status}</td>
                                    <td>{it?.price} tk</td>
                                    {
                                        it?.status === 'verified' ? <Link to={`/daseboard/update/${it?._id}`}><td><button className="btn btn-sm bg-green-200">Update</button></td></Link> :
                                            <td><button disabled className="btn btn-sm bg-green-200">Update</button></td>
                                    }

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

export default Myitem;