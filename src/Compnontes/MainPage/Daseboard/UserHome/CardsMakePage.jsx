import { useLoaderData } from "react-router-dom";
import Heading from "../../GoolebalSecton/Heading";


const CardsMakePage = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Heading title="user form"></Heading>
            <div>
                
            </div>
        </div>
    );
};

export default CardsMakePage;