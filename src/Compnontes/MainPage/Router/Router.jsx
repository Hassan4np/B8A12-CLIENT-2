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
import Advertise from "../Daseboard/AdminHome/Advertise";
import AdminPrivaterout from "../Daseboard/AdminHome/AdminPrivaterout";
import AgentPrivaterout from "../Daseboard/AgentHome/AgentPrivaterout";


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
                element:<PrivateRout><AgentPrivaterout><Additem></Additem></AgentPrivaterout></PrivateRout>
            },
            {
                path: 'myitem',
                element:<PrivateRout><AgentPrivaterout> <Myitem></Myitem></AgentPrivaterout></PrivateRout>
            },
            {
                path: 'update/:id',
                element: <PrivateRout><AgentPrivaterout><Updateitem></Updateitem></AgentPrivaterout></PrivateRout>,
                
            },
            {
                path: 'requestitem',
                element:<PrivateRout><AgentPrivaterout><Requestedoffer></Requestedoffer></AgentPrivaterout></PrivateRout>
            },
            {
                path:'solditem',
                element:<PrivateRout><AgentPrivaterout><Solditem></Solditem></AgentPrivaterout></PrivateRout>
            },
            //Admin section------------>
            {
                path: 'adminhome',
                element: <PrivateRout><AdminHome></AdminHome></PrivateRout>
            },
            {
                path: 'itemmange',
                element:<Manageitem></Manageitem>
            },
            {
                path: 'manageusers',
                element:<PrivateRout><AdminPrivaterout><Manageusers></Manageusers></AdminPrivaterout></PrivateRout>
            },
            {
                path: 'allreview',
                element: <Allreview></Allreview>
            },
            {
                path:'advertise',
                element:<PrivateRout><AdminPrivaterout><Advertise></Advertise></AdminPrivaterout></PrivateRout>
            }

        ]
    }
]);
export { router }  