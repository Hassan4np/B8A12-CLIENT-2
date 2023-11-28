import { useQuery } from "react-query";
import Heading from "../../GoolebalSecton/Heading";
import useAllPropotismenu from "../../Hools/useAllPropotismenu";
import useAxousSecret from "../../Hools/useAxousSecret";
import useAuth from "../../Hools/useAuth";

const Solditem = () => {
    const axoussec = useAxousSecret();
    const { user } = useAuth();
    const { data, refetch } = useQuery({
        queryKey: ['advertisement/agent', user.email],
        queryFn: async () => {
            const res = await axoussec.get(`/advertisement/agent/${user.email}`);
            console.log(res.data)
            return res.data
        }
    });
    return (
        <div>
            <Heading title='sold item'></Heading>
        </div>
    );
};

export default Solditem;