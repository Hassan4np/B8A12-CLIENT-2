import p1 from "../../../assets/menu/1.jpg"
import p2 from "../../../assets/menu/2.jpeg"
import p3 from "../../../assets/menu/3.jpeg"
import p4 from "../../../assets/menu/4.jpeg"
// import p5 from "../../../assets/menu/5.jpg"

const CollactionCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10">
            <div className="card  bg-base-100 shadow-xl  ">
                <figure className="px-10 pt-10 w-full h-[250px]">
                    <img src={p1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-green-400">Heair contole oil</h2>
                    <p className="text-base text-gray-400">Our expert agents offer a range of listings for sale or rent. Explore unique locations and affordable prices.</p>
                   
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 w-full h-[250px]">
                    <img src={p2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-green-400">Body spara</h2>
                    <p className="text-base text-gray-400">Our expert agents offer a range of listings for sale or rent. Explore unique locations and affordable prices.</p>
                   
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 w-full h-[250px]">
                    <img src={p3} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-green-400">Nole milish</h2>
                    <p className="text-base text-gray-400">Our expert agents offer a range of listings for sale or rent. Explore unique locations and affordable prices.</p>
                   
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 w-full h-[250px]">
                    <img src={p4} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-green-400">Winter creame</h2>
                    <p className="text-base text-gray-400">Our expert agents offer a range of listings for sale or rent. Explore unique locations and affordable prices.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default CollactionCards;