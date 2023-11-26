import { Link } from "react-router-dom"
import useAuth from '../Hools/useAuth';
import logo from "..//../../assets/images.png"

const Navbar1 = () => {
    const { user,UserLogout } = useAuth();
    const links = <>
        <Link to="/" className="mr-5"><button className="btn btn-sm bg-green-300"> <li><a>Home</a></li></button></Link>
        <Link to="/proparis" className="mr-5"><button className="btn btn-sm bg-green-300"> <li><a>All Properties</a></li></button></Link>
        <Link to="/daseboard/userhome" className="mr-5"><button className="btn btn-sm bg-green-300"> <li><a>dashboard</a></li></button></Link>
     
    </>
 const userlogout = () => {
    UserLogout()
        .then({})
        .then(error => {
            console.log(error)
        })
}
    return (
        <div className="z-10" >
            <nav className=" shadow-2xl">
                <div className="navbar bg-base-100  ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                {links}
                            </ul>
                        </div>
                       
                        <img className="w-16" src={logo} alt="" />
                        {
                            user&&<p className="">{user?.displayName}</p>
                        }
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {
                            user &&
                            <div className="avatar offline">
                                <div className="w-10 rounded-full mr-3">
                                    <img src={user?.photoURL} />
                                   
                                </div>
                               
                            </div>
                        }
                        {
                            user?  <button onClick={userlogout} className="btn bg-green-300 btn-sm">Logout</button>: <Link to="/login" className="mr-5"><button className="btn btn-sm bg-green-300"> <a>login</a></button></Link>
                        }
                      
                       
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar1;