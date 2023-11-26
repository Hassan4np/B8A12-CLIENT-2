
import { useQuery } from "react-query";
import Heading from "../GoolebalSecton/Heading";
import useAuth from "../Hools/useAuth";
import Bannar from "./Bannar";
import useAxousPublic from "../Hools/useAxousPublic";

import Cards from "./Cards";
import CollactionCards from "./CollactionCards";
import Aboutus from "./Aboutus";
// import useAllPropotismenu from "../Hools/useAllPropotismenu";


const Home = () => {
    // const [menus] = useAllPropotismenu();
    // console.log(menus)
    // const axouspubublic = useAxousPublic();
    // const {loading} = useAuth()
    // const { data } = useQuery({
    //     queryKey: ['advertisement'],
    //     queryFn: async () => {
    //         const res = await axios.get('advertisement');
    //         return res.data

    //     }
    // })
    const axospublic = useAxousPublic();
    const { data, isLoading } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await axospublic.get('/advertisement')
            console.log(res.data)
            return res.data
        }
    })
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
                        data?.map(item => <Cards card={item} key={item._id}></Cards>)}
                </div>
                <div>
                    <Heading title="About us" subtitle="amet consectetur adipisicing elit. Obcaecati, quas!" ></Heading>
                    <Aboutus></Aboutus>
                </div>
                <div>
                    <Heading title="our collaction" subtitle="amet consectetur adipisicing elit. Obcaecati, quas!" ></Heading>
                    <CollactionCards></CollactionCards>
                </div>

            </div>
        </div>
    );
};

export default Home;