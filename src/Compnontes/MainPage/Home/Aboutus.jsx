
import about from "../../../assets/menu/about.jpg"
const Aboutus = () => {
    return (
        <div className="flex justify-center items-center px-10">
            <div className="relative md:flex  w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md gap-10">
                <div className="relative w-full md:w-1/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={about}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6 w-full md:w-1/2">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-green-500 uppercase">
                    Advertisement
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Our Teams Member
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-400">
                    Embark on your property journey with us! Explore an array of stunning homes—beachfront paradises, secluded cabins, and city apartments. Our dedicated agents provide expert guidance for buying or renting. Discover unique locations and competitive prices. Your dream home awaits! Contact us for personalized assistance and start your journey toward finding the perfect place to call your own.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Aboutus;