
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
const AllProparisCards = ({ item }) => {
    return (
        <div >
            <div className="card w-[350px]  h-[500px] bg-base-100 shadow-xl border  mb-2">
                <figure className="px-10 pt-10 w-[320px] h-[250px]">
                    <img src={item?.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-start ">
                    <h2 className="card-title text-2xl">{item?.title}</h2>
                    <h5 className="card-title text-lg text-gray-400"><FaLocationArrow></FaLocationArrow>{item?.location_name}</h5>
                    <div className="flex justify-between">
                        <h5 className="card-title text-base text-gray-500">Price: {item?.price} tk</h5>
                        <h2 className="card-title p-2 rounded-xl bg-green-100">{item?.status}</h2>
                    </div>
                    {/* <figure className="px-10 pt-10">
                        <img src={item?.image} alt="Shoes" className="rounded-xl " />
                    </figure> */}
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={item?.agent_img} />
                            </div>
                        </div>
                        <h2 className="card-title ml-2 text-lg text-gray-400">{item?.agent_name}</h2>
                    </div>
              
                 <div className="text-center">  <Link to={`/carddetails/${item?._id}`}><button className="btn w-full bg-green-300 mb-2 ml-3">Details</button></Link></div>
             
                </div>
            </div>
            
        </div>
    );
};

export default AllProparisCards;