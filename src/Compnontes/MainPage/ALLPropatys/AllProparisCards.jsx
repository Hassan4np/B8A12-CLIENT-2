
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
const AllProparisCards = ({ item }) => {
    return (
        <div >
            <div className="card w-[350px]  h-[450px] bg-base-100 shadow-xl border  mb-2">
                <figure className="px-10 pt-10 w-full h-[250px] ">
                    <img src={item?.image} alt="Shoes" className=" rounded-2xl " />
                </figure>
                <div className="card-body text-start -mt-5 ">
                    <div className="flex justify-between px-5 md:px-1">
                        <h2 className="card-title text-2xl">{item?.title}</h2>
                        <h5 className="card-title text-lg text-gray-400"><FaLocationArrow></FaLocationArrow>{item?.location_name}</h5>
                    </div>
                    <div className="flex justify-between px-5 md:px-1">
                        <h5 className="card-title text-base text-gray-500">Price: {item?.price} tk</h5>
                        <h2 className="card-title p-2 rounded-xl bg-green-100 text-gray-500">{item?.status}</h2>
                    </div>
                    {/* <figure className="px-10 pt-10">
                        <img src={item?.image} alt="Shoes" className="rounded-xl " />
                    </figure> */}
                    <div className="flex px-4 md:px-1">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={item?.agent_img} className="text-center" />
                            </div>
                        </div>
                        <h2 className="card-title ml-2 text-lg text-gray-400">{item?.agent_name}</h2>
                    </div>

                    <div className="text-center">  <Link to={`/carddetails/${item?._id}`}><button className="btn w-full bg-green-300 text-xl mb-2 ml-3">Details</button></Link></div>

                </div>
            </div>

        </div>
    );
};

export default AllProparisCards;