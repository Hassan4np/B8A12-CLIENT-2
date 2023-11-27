import {
    createBrowserRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import Home from "../Home/Home";
import Error from "../Pages/Error";
import SignupPage from "../RegistonPage/SignupPage";
import LoginPage from "../RegistonPage/LoginPage";
import CardDetails from "../ALLPropatys/CardDetails";
import Allpropaty from "../ALLPropatys/Allpropaty";
import PrivateRout from "../PrivateRout/PrivateRout";
import DaseBoard from "../Daseboard/DaseBoard";
import UserHome from "../Daseboard/UserHome/UserHome";
import AdminHome from "../Daseboard/AdminHome/AdminHome";
import AgentHome from "../Daseboard/AgentHome/AgentHome";
import UserWishlist from "../Daseboard/UserHome/UserWishlist";
import CardsMakePage from "../Daseboard/UserHome/CardsMakePage";
import Userbought from "../Daseboard/UserHome/Userbought";
import Payment from "../Daseboard/UserHome/Payment";
import Review from "../Daseboard/UserHome/Review";
import Additem from "../Daseboard/AgentHome/Additem";
import Myitem from "../Daseboard/AgentHome/Myitem";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage></MainPage>,
        errorElement: <Error></Error>,
        children: [

            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: '/signup',
                element: <SignupPage></SignupPage>,
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>,
            },
            {
                path: '/carddetails/:id',
                element: <PrivateRout><CardDetails></CardDetails></PrivateRout>,
            },
            {
                path: "/proparis",
                element: <Allpropaty></Allpropaty>,
            }


        ]
    },
    {
        path: "/daseboard",
        element: <PrivateRout><DaseBoard></DaseBoard></PrivateRout>,
        children: [
            //User section--------------->
            {
                path: 'userhome',
                element: <PrivateRout><UserHome></UserHome></PrivateRout>
            },
            {
                path: 'wishlist',
                element: <PrivateRout><UserWishlist></UserWishlist></PrivateRout>
            },
            {
                path: 'cardsmake/:id',
                element: <CardsMakePage></CardsMakePage>,
                loader: ({ params }) => fetch(`http://localhost:5000/cards/${params.id}`)

            },
            {
                path: 'bought',
                element: <Userbought></Userbought>
            },
            {
                path: 'review',
                element: <Review></Review>
            },
            //Agent section------------>
            {
                path: 'agenthome',
                element: <PrivateRout><AgentHome></AgentHome></PrivateRout>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'adminhome',
                element: <PrivateRout><AdminHome></AdminHome></PrivateRout>
            },
            {
                path:'additem',
                element:<Additem></Additem>
            },
            {
                path:'myitem',
                element:<Myitem></Myitem>
            }
            ,

        ]
    }
]);
export { router }  