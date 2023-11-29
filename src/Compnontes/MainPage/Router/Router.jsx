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
import Updateitem from "../Daseboard/AgentHome/Updateitem";
import Manageitem from "../Daseboard/AdminHome/Manageitem";
import Manageusers from "../Daseboard/AdminHome/Manageusers";
import Allreview from "../Daseboard/AdminHome/Allreview";
import Requestedoffer from "../Daseboard/AgentHome/Requestedoffer";
import Solditem from "../Daseboard/AgentHome/Solditem";


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
                element: <PrivateRout><CardsMakePage></CardsMakePage>,</PrivateRout>,

            },
            {
                path: 'bought',
                element: <PrivateRout><Userbought></Userbought></PrivateRout>
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
                element: <PrivateRout><Payment></Payment></PrivateRout>
            },

            {
                path: 'additem',
                element: <PrivateRout><Additem></Additem></PrivateRout>
            },
            {
                path: 'myitem',
                element:<PrivateRout> <Myitem></Myitem></PrivateRout>
            },
            {
                path: 'update/:id',
                element: <PrivateRout><Updateitem></Updateitem></PrivateRout>,
                
            },
            {
                path: 'requestitem',
                element:<PrivateRout><Requestedoffer></Requestedoffer></PrivateRout>
            },
            {
                path:'solditem',
                element:<PrivateRout><Solditem></Solditem></PrivateRout>
            },
            //Admin section------------>
            {
                path: 'adminhome',
                element: <PrivateRout><AdminHome></AdminHome></PrivateRout>
            },
            {
                path: 'itemmange',
                element:<PrivateRout> <Manageitem></Manageitem></PrivateRout>
            },
            {
                path: 'manageusers',
                element:<PrivateRout> <Manageusers></Manageusers></PrivateRout>
            },
            {
                path: 'allreview',
                element: <PrivateRout><Allreview></Allreview></PrivateRout>
            }

        ]
    }
]);
export { router }  