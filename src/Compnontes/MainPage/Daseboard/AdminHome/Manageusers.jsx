import Heading from "../../GoolebalSecton/Heading";
import useAllUsers from "../../Hools/useAllUsers";
import useAxousSecret from "../../Hools/useAxousSecret";


const Manageusers = () => {
    const [users, isLoading, refetch] = useAllUsers();
    const asxossecer = useAxousSecret();
    console.log(users)
    const hendleadmin = (id) => {

        console.log(id)
        const roll = { roll: 'admin' }

        asxossecer.patch(`/users/${id}`, roll)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.log(error)
            })
    };

    const hendleagent = (id) => {
        console.log(id)
        const roll = { roll: 'agent' }

        asxossecer.patch(`/users/${id}`, roll)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.log(error)
            })
    };

    const hendlefraud = (id) => {
        console.log(id)
        const roll = { roll: 'fraud' }

        asxossecer.patch(`/users/${id}`, roll)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            .catch(error => {
                console.log(error)
            })
    }
    const hendledelete = (id) => {
        console.log(id)
        asxossecer.delete(`/users/${id}`)
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
            <Heading title="manage users"></Heading>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Agent</th>
                                <th>Fraud</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((item, idx) => <tr key={item._id} className="bg-base-200">
                                    <th>{idx + 1}</th>
                                    <td>{item?.name}</td>
                                    <td>{item?.email}</td>
                                    {
                                        item?.roll === 'admin'?'Admin':<td><button onClick={() => hendleadmin(item._id)} className="btn btn-sm hover:bg-green-200 bg-green-100">Admin</button></td>
                                    }
                                    {
                                        item?.roll === 'agent'?'Agent': <td><button onClick={() => hendleagent(item._id)} className="btn btn-sm  hover:bg-green-200 bg-green-100">Agent</button></td>
                                    }
                                    {
                                        item?.roll==='fraud'?'Fraud':<td><button onClick={()=>hendlefraud(item._id)}  className="btn btn-sm  hover:bg-green-200 bg-green-100">Fraud</button></td>
                                    }
                                    <td><button onClick={() => hendledelete(item._id)} className="btn btn-sm  hover:bg-green-200 bg-green-100">Delete</button></td>


                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manageusers;