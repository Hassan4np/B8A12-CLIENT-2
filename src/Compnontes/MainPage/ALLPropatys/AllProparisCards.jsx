
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
const AllProparisCards = ({ item }) => {
    return (
        <div>
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  ">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <img className="rounded-lg"
                        src={item?.image}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                        {item?.title}
                    </h4>
                    <p className="block mt-3 font-sans text-lg antialiased font-normal leading-relaxed text-gray-400"><FaLocationArrow className="inline mr-2" />{item?.location_name}</p>
                    <div className="flex justify-between">
                        <p className="block mt-3 font-sans text-lg  antialiased font-normal leading-relaxed text-gray-400">

                            {item?.price} tk
                        </p>
                        <p className="block mt-3 font-sans text-xl bg-green-200 px-2 rounded-lg antialiased font-normal leading-relaxed text-gray-700">

                            {item?.status}
                        </p>
                    </div>
                    <div className="flex justify-start mt-2">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={item?.agent_img} />
                            </div>
                        </div>
                        <p className="ml-5 mt-2 text-base text-gray-400">{item?.agent_name}</p>
                    </div>
                </div>
               <div>
                <Link to={`/carddetails/${item?._id}`}><button className="btn -mt-5 bg-green-300 mb-2 ml-3">Details</button></Link>
               </div>
            </div>
        </div>
    );
};

export default AllProparisCards;