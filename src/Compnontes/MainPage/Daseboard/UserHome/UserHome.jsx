import Heading from "../../GoolebalSecton/Heading";
import useAllUsers from "../../Hools/useAllUsers";
import useAuth from "../../Hools/useAuth";


const UserHome = () => {
    const { user } = useAuth();
    const [alluser] = useAllUsers();
    const userinfo = alluser?.find(item => item.email === user.email);
    console.log(userinfo)
    return (
        <div className="px-5">
            <Heading title='user home'></Heading>
            <div className="border p-2 flex">
                <div className="boder mr-10 h-[150px] w-[200px] bg-green-500 flex justify-center rounded-xl items-center">
                    <h1 className="text-2xl font-bold "> <img className="rounded-full" src={user.photoURL} alt="" /></h1>
                </div>
                <div className="boder mr-10 h-[150px] w-[200px] bg-green-500 flex justify-center rounded-xl items-center">
                    <h1 className="text-2xl font-bold ">{user?.displayName || " User"}</h1>
                </div>
                <div className="boder h-[150px] w-[200px] bg-green-500 flex justify-center rounded-xl items-center">
                    <h1 className="text-2xl font-bold ">{user?.roll || " User"}</h1>
                </div>
            </div>

        </div>
    );
};

export default UserHome;