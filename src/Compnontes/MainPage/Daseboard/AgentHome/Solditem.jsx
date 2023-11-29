import { useQuery } from "react-query";
import Heading from "../../GoolebalSecton/Heading";
import useAllPropotismenu from "../../Hools/useAllPropotismenu";
import useAxousSecret from "../../Hools/useAxousSecret";
import useAuth from "../../Hools/useAuth";

const Solditem = () => {
    const axoussec = useAxousSecret();
    const { user } = useAuth();
    const { data } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axoussec.get(`/payments/${user.email}`);
            console.log(res.data)
            return res.data
        }
    });
    const totalprice = data?.reduce((total, item) => total + parseInt(item.price), 0);
    console.log(totalprice)
    return (
        <div>
            <Heading title='sold item'></Heading>
            <div>
                <h1 className="text-4xl px-10 font-bold">Sold price: {totalprice} tk</h1>
            </div>
        </div>
    );
};

export default Solditem;