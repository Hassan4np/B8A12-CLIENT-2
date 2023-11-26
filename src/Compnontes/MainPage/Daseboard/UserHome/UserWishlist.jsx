import { useQuery } from "react-query";
import Heading from "../../GoolebalSecton/Heading";
import useAxousSecret from "../../Hools/useAxousSecret";
import useAuth from "../../Hools/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const UserWishlist = () => {
    const axoussec = useAxousSecret();
    const { user } = useAuth();
    const { data, refetch } = useQuery({
        queryKey: ['cards', user.email],
        queryFn: async () => {
            const res = await axoussec.get(`/cards?email=${user.email}`);
            console.log(res.data)
            return res.data
        }
    })
    const hendledelete = (id) => {
        console.log(id)
        axoussec.delete(`/cards/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Item delete Successfully ',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <Heading title="Wishlist"></Heading>
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
                                <th>Make offer</th>
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
                                    <td>{it?.location}</td>
                                    <td>{it?.agentName}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={it?.agentImage} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{it?.status}</td>
                                    <td>{it?.price}tk</td>
                                    <Link to={`/daseboard/cardsmake/${it?._id}`}><td><button className="btn btn-sm bg-green-200">Offer</button></td></Link>
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

export default UserWishlist;