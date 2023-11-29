import { Link, Outlet } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaAd, FaCalendar, FaHome, FaList, FaRegMinusSquare,  } from 'react-icons/fa';
import { useQuery } from "react-query";
import useAuth from "../Hools/useAuth";
import useAxousSecret from "../Hools/useAxousSecret";


const DaseBoard = () => {
    //   const isAdmin = true;
    // const isAgent = true
    const axoussec = useAxousSecret();
    const {user,UserLogout} = useAuth();
 
    const {data} = useQuery({
        queryKey:['users/admin'],
        queryFn: async ()=>{
            const res = await  axoussec.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data          
        }
    });
    console.log(data);
    const userlogout = () => {
        UserLogout()
            .then({})
            .then(error => {
                console.log(error)
            })
    }
    return (
        <div className="flex">
            <div className=" min-h-[800px] bg-orange-400 w-1/5">

                {/* Agentsection------------> */}
                {
                    data==='agent' && <>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/agenthome"><AiOutlineShoppingCart></AiOutlineShoppingCart>Agent Profile</Link></li>
                        </ul>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/additem"><FaCalendar></FaCalendar>Add Item</Link></li>
                        </ul>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/myitem"><FaCalendar></FaCalendar>All Item</Link></li>
                        </ul>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/solditem"><FaAd></FaAd>Sold item </Link></li>
                        </ul>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/requestitem"><FaList></FaList>Requested item</Link></li>
                        </ul>
                    </>
                }
                {/* admin section ------> */}
                {
                   data==='admin' && <>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/adminhome"><FaCalendar></FaCalendar>Profile</Link></li>
                        </ul>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/itemmange"><FaCalendar></FaCalendar>Manage Item</Link></li>
                        </ul>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/manageusers"><FaAd></FaAd>Manage user</Link></li>
                        </ul>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/allreview"><FaList></FaList>Manage review</Link></li>
                        </ul>
                        <ul className="menu p-2">
                            <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/advertise"><FaList></FaList>Advertise</Link></li>
                        </ul>
                    </>} :
                {
                    data==='user' &&  <>
                    <ul className="menu p-2">
                        <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/userhome"><AiOutlineShoppingCart></AiOutlineShoppingCart>MyProfile</Link></li>
                    </ul>
                    <ul className="menu p-2">
                        <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/wishlist"><FaCalendar></FaCalendar>Wishlist</Link></li>
                    </ul>
                    <ul className="menu p-2">
                        <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/bought"><FaAd></FaAd>Bougth item</Link></li>
                    </ul>
                    <ul className="menu p-2">
                        <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/daseboard/review"><FaList></FaList>My reviews</Link></li>
                    </ul>
                </>
}
                <div className="divider divider-horizontal border-b-4 w-2/4"></div>
                <ul className="menu p-2">
                    <li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/"><FaHome></FaHome>Home</Link></li>
                </ul>

                <ul className="menu p-2">
                    <button onClick={userlogout} ><li className=" border bg-green-200 rounded-md  text-2xl"><Link to="/"><FaRegMinusSquare></FaRegMinusSquare>Logout</Link></li></button>
                </ul>



            </div>
            <div className="flex-1 w-4/5">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default DaseBoard;