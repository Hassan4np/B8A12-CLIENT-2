
import useAllPropotismenu from "../Hools/useAllPropotismenu";
// import useCategory from "../Hools/useCategory";
import AllProparisCards from "./AllProparisCards";


const Allpropaty = () => {
    // const text = 'verified'
    // const [data] = useCategory({text});
    const [menus,] = useAllPropotismenu();
    const verified = menus?.filter(item=>item.status==='verified');


    console.log(verified)
    return (
        <div className="mt-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
                {
                    verified?.map(item=><AllProparisCards item={item} key={item._id}></AllProparisCards>)
                }
            </div>
        </div>
    );
};

export default Allpropaty;