
import Heading from '../../GoolebalSecton/Heading';
import { useQuery } from "react-query";

import useAxousSecret from "../../Hools/useAxousSecret";
import useAuth from '../../Hools/useAuth';
import { Button } from '@mui/material';
const Requestedoffer = () => {
    const asxossecer = useAxousSecret();
    const { user } = useAuth();
    const { data, refetch } = useQuery({
        queryKey: ['boughts', user.email],
        queryFn: async () => {
            const res = await asxossecer.get(`/boughts/${user.email}`);
            console.log(res.data);
            return res.data

        }
    });
    const hendleaccepted = (id) => {
        console.log(id)
        const status = {
            status: 'accepted'
        }
        asxossecer.patch(`/boughts/${id}`, status)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.log(error)
            })
    }
    const hendlerejected = (id) => {
        console.log(id)
        //rejected
        const status = {
            status: 'rejected'
        }
        asxossecer.patch(`/boughts/${id}`, status)
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
            <Heading title="Request item"></Heading>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>BuyerName</th>
                                <th>BuyerEmail</th>
                                <th>Price</th>
                                <th>Accepted</th>
                                <th>Rejected</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((it, idx) => <tr key={it._id}>
                                    <th>{idx + 1}</th>

                                    <td>{it?.title}</td>
                                    <td>{it?.location}</td>
                                    <td>{it?.buyerName}</td>
                                    <td>{it?.buyerEmail}</td>
                                    <td>{it?.price}</td>
                                    {
                                        it?.status === 'accepted' ?<th> <button   className='btn btn-sm  bg-gray-500'>accepted</button></th> : <><button onClick={() => hendleaccepted(it?._id)} className="btn btn-sm  bg-green-200">accept</button></>
                                    }
                                    {
                                        it?.status === 'rejected' ?  <th ><button  className="btn btn-sm bg-gray-500">rejected</button></th> : <th className=""><button onClick={() => hendlerejected(it?._id)} className="btn btn-sm  bg-green-200">reject</button></th>
                                    }
                                   

                                </tr>)
                            }




                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Requestedoffer;