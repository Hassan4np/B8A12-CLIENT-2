
import { useState } from "react";
import useAllPropotismenu from "../Hools/useAllPropotismenu";
// import useCategory from "../Hools/useCategory";
import AllProparisCards from "./AllProparisCards";
import { useQuery } from "react-query";
import useAxousPublic from "../Hools/useAxousPublic";


const Allpropaty = () => {
    // const text = 'verified'
    // const [data] = useCategory({text});
    const [search,setsearch] = useState();
    const axospublic = useAxousPublic();
    const [menus,] = useAllPropotismenu(search);
    const verified = menus?.filter(item => item.status === 'verified');
  

    // console.log(verified);
//-------------------------------------------------
    // const {data:allads,} = useQuery({
    //     queryKey:['advertisement'],
    //     queryFn: async ()=>{
    //         const res = await  axospublic.get(`/advertisement/all?search=${search}`);
    //         console.log(res.data);
    //         const verified = res.data?.filter(item => item.status ==='verified');
    //         return verified         
    //     }
    // });
    // console.log(allads);


    const hendlesearch = (e) => {
        e.preventDefault()
        const form = e.target;
        const search = form.search.value;
        console.log(search)
        setsearch(search)

    }
    return (
        <div className="mt-10 mb-10">
            <div className="w-full mt-10 mb-5 h-24 border flex justify-between px-10 "  >
                <h1 className="text-2xl">All Propary</h1>
                <div className="mt-4">
                    <form onSubmit={hendlesearch}>
                        <input className="text-xl p-1 border" name='search' type="text" placeholder="search..." />
                        <button className=" btn btn-sm ml-2 py-1 btn-success">search</button>
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