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


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage></MainPage>,
        errorElement:<Error></Error>,
        children: [
            
            {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:'/signup',
            element:<SignupPage></SignupPage>,
        },
        {
            path:"/login",
            element:<LoginPage></LoginPage>,
        },
        {
            path:'/carddetails/:id',
            element:<PrivateRout><CardDetails></CardDetails></PrivateRout>,
        },
        {
            path:"/proparis",
            element:<Allpropaty></Allpropaty>,
        }


        ]
    },

]);
export { router }  