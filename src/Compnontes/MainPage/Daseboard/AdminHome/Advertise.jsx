import Heading from "../../GoolebalSecton/Heading";
import useAllProducts from "../../Hools/useAllProducts";


const Advertise = () => {
    const [menus] = useAllProducts();
    const verified = menus?.filter(item => item.status === 'verified');
    // console.log(verified)
    const hendledelete=()=>{
        //todo
    }
    const hendleadviets=()=>{
        //todo
    }
    return (
        <div>
            <Heading title="advertise"></Heading>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Img</th>
                                <th>Title</th>                             
                                <th>Agent Name</th>                                                       
                                <th>Price</th>                      
                                <th>Advertise</th>
                                <th>Removed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                verified?.map((it, idx) => <tr key={it._id}>
                                    <th>{idx + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={it?.image} />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{it?.title}</td>                            
                                    <td>{it?.agent_name}</td>                                 
                                    <td>{it?.price}tk</td>

                                    <th className=""><button onClick={() => hendleadviets(it?._id)} className="btn btn-sm  bg-green-200">Advertise</button></th>
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

export default Advertise;