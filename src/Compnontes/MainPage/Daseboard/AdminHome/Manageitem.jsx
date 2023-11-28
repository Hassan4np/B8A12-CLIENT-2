import Heading from "../../GoolebalSecton/Heading";
import useAllPropotismenu from "../../Hools/useAllPropotismenu";
import useAxousSecret from "../../Hools/useAxousSecret";

const Manageitem = () => {
    const [menus, refetch, isLoading] = useAllPropotismenu();
    const asxossecer = useAxousSecret();

    const hendleverified=(id)=>{
        console.log(id)
        const status={status:'verified'}
        asxossecer.patch(`/advertisement/status/${id}`,status)
        .then(res=>{
            console.log(res.data);
            refetch()
        })
        .catch(error=>{
            console.log(error)
        })

    };
    const hendlereject=(id)=>{
        console.log(id)
        const status={status:'rejected'}
        asxossecer.patch(`/advertisement/status/${id}`,status)
        .then(res=>{
            console.log(res.data);
            refetch()
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <Heading title="item manage"></Heading>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Agent Name</th>
                                <th>Agent Email</th>
                                <th>Price</th>
                                <th>Verified</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            menus?.map((item,idx)=> <tr key={item._id} className="bg-base-200">
                            <th>{idx+1}</th>
                            <td>{item?.title}</td>
                            <td>{item?.location_name}</td>
                            <td>{item?.agent_name}</td>
                            <td>{item?.agent_email}</td>
                            <td>{item?.price}</td>
                           {
                            item?.status==='verified'? <td><button disabled className="btn btn-sm bg-gray-500">Verified</button></td>:
                            <td><button onClick={()=>hendleverified(item._id)}  className="btn btn-sm bg-green-200">Verified</button></td>
                           }
                            {
                                item?.status==='rejected' ? <td><button disabled  className="btn btn-sm bg-gray-500">Rejected</button></td> :
                                 <td><button onClick={()=>hendlereject(item._id)} className="btn btn-sm bg-green-200">Reject</button></td>                               
                            }
                          
                        </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manageitem;