
import useCategory from "../Hools/useCategory";
import AllProparisCards from "./AllProparisCards";


const Allpropaty = () => {
    const text = 'verified'
    const [data,refetch,isLoading] = useCategory({text});
    console.log(data)
    if(isLoading){
        return <div className="text-center mt-10 mb-10"><span className="loading loading-bars loading-lg"></span></div>
    }
    return (
        <div className="mt-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data?.map(item=><AllProparisCards item={item} key={item._id}></AllProparisCards>)
                }
            </div>
        </div>
    );
};

export default Allpropaty;