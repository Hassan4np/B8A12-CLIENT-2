
import { useState } from "react";
import useAllPropotismenu from "../Hools/useAllPropotismenu";
import AllProparisCards from "./AllProparisCards";




const Allpropaty = () => {
    const [search,setsearch] = useState('');
    const [asc,setasc] = useState(true)
    const [menus,] = useAllPropotismenu(search,asc);
    const verified = menus?.filter(item => item.status === 'verified');

    const hendlesearch = (e) => {
        e.preventDefault()
        const form = e.target;
        const search = form.search.value;
        console.log(search)
        setsearch(search)

    };
    console.log(asc)
    return (
        <div className="mt-10 mb-10">
            <div className="w-full mt-10 mb-5 h-28 md:h-24 border flex justify-between px-10 "  >
                <h1 className="text-2xl font-bold mt-5 hidden lg:block ">All Propary</h1>
                <button
                onClick={()=>setasc(!asc)}
                 className="btn bg-green-300 mt-2 -ml-6 md:ml-0 ">
                    {
                        asc?' Price: High to Low':" Price: Low to High"
                    }
                </button>
                <div className="mt-4">
                    <form onSubmit={hendlesearch}>
                        <input className="text-lg p-1 ml-10 md:ml-1 w-[130px] border" name='search' type="text" placeholder="Search..." />
                        <button className="  rounded px-6   md:px-2 md:rounded-r-xl ml-16 md:ml-1 py-2 mt-1 md:mt-0 bg-green-300">Search</button>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
                {
                    verified?.map(item => <AllProparisCards item={item} key={item._id}></AllProparisCards>)
                }
            </div>
        </div>
    );
};

export default Allpropaty;