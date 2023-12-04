
import { useQuery } from "react-query";
import Heading from "../GoolebalSecton/Heading";

import Bannar from "./Bannar";
import useAxousPublic from "../Hools/useAxousPublic";

import Cards from "./Cards";
import CollactionCards from "./CollactionCards";
import Aboutus from "./Aboutus";
import Feedback from "./Feedback";
// import useAllPropotismenu from "../Hools/useAllPropotismenu";


const Home = () => {

    const axospublic = useAxousPublic();
 

    const {data:menus,isLoading} = useQuery({
        queryKey:['advertisement'],
        queryFn: async ()=>{
            const res = await  axospublic.get(`/advertisement/all`);
            console.log(res.data);
            const verified = res?.data?.filter(its=>its.status === 'verified');
            return verified          
        }
    });

    if (isLoading) {
        return <div className="flex justify-center items-center mt-10 mb-10"><span className="loading loading-bars loading-lg text-center "></span></div>
    }
    
    return (
        <div className="w-full">
            <Bannar></Bannar>
            <div>
                <Heading title="OUR SERVICE" subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quas!"></Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {
                        menus?.slice(0,4)?.map(item => <Cards card={item} key={item._id}></Cards>)}
                </div>
                <div>
                    <Heading title="About us" subtitle="amet consectetur adipisicing elit. Obcaecati, quas!" ></Heading>
                    <Aboutus></Aboutus>
                </div>
                <div>
                    <Heading title="our collaction" subtitle="amet consectetur adipisicing elit. Obcaecati, quas!" ></Heading>
                    <CollactionCards></CollactionCards>
                </div>
                <div>
                    <Heading title="REview"></Heading>
                    <Feedback></Feedback>
                </div>

            </div>
        </div>
    );
};

export default Home;