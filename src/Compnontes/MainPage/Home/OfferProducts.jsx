import { FaArrowRight } from "react-icons/fa";
import p1 from "../../../assets/Teams/p1.jpeg"
import p2 from "../../../assets/Teams/p2.jpeg"
import p3 from "../../../assets/Teams/p3.jpeg"
import p4 from "../../../assets/Teams/p4.jpeg"
import { Link } from "react-router-dom";

const OfferProducts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 px-10 md:px-0">
            <Link>
                <div className="w-[278px] h-[170px] border rounded-xl " style={{ backgroundImage: `url(${p1})` }}>
                    <div className="text-center mt-3 ">
                        <h1 className="text-[14px] font-medium text-green-300 uppercase ">Best Deals</h1>
                        <h1 className="text-xl text-green-300 font-semibold text-white">Sale of the Month</h1>
                        <h5 className="text-base pb-7 pt-3 font-normal text-white">Up to <span className="text-[18PX] rounded-md font-semibold bg-black px-3 py-[6px] text-[#FF8A00]">30% OFF</span></h5>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="w-[278px] h-[170px] border rounded-xl " style={{ backgroundImage: `url(${p2})` }}>
                    <div className="text-center mt-3 ">
                        <h1 className="text-[14px] font-medium  uppercase text-black">Best Deals</h1>
                        <h1 className="text-xl  font-semibold text-black">Sale of the Month</h1>
                        <h5 className="text-base pb-7 pt-3 font-normal text-black">Up to <span className="text-[18PX] rounded-md font-semibold bg-black px-3 py-[6px] text-[#FF8A00]">30% OFF</span></h5>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="w-[278px] h-[170px] border rounded-xl  " style={{ backgroundImage: `url(${p3})` }}>
                    <div className="text-center mt-4">
                        <h1 className="text-[14px] font-medium uppercase text-black">Winter Sale</h1>

                        <h5 className="text-base pb-7 pt-3 font-normal text-black">Up to <span className="text-[18PX] rounded-md font-semibold bg-black px-3 py-[6px] text-[#FF8A00]">64% OFF</span></h5>
                    </div>
                </div>
            </Link>
            <Link>
                <div className="w-[278px] h-[170px] border rounded-xl  " style={{ backgroundImage: `url(${p4})` }}>
                    <div className="text-center mt-4">
                        <h1 className="text-[14px] font-medium uppercase text-black">Winter Sale</h1>

                        <h5 className="text-base pb-7 pt-3 font-normal text-white">Up to <span className="text-[18PX] rounded-md font-semibold bg-black px-3 py-[6px] text-[#FF8A00]">55% OFF</span></h5>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default OfferProducts;