import { Link } from "react-router-dom";



const Cards = ({ card }) => {
    const { image, location_name, price, status,_id } = card;
    
    return (
        <div className="mt-10 mb-10">

            <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl ">
                <div className="relative  md:h-[200px] object-cover md:w-[250px] mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                        src={image}
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {location_name}
                    </h5>
                    <div className="flex justify-between text-gray-500">
                        <p className="block mb-2 font-sans t antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Price: {price}tk
                        </p>
                        <p className="block mb-2 font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mr-20 md:mr-5">
                                {status}
                        </p>
                    </div>

                </div>
                <div className="p-6 pt-0">
                    <Link to={`/carddetails/${_id}`}><button
                        className="select-none rounded-lg bg-green-200 text-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;