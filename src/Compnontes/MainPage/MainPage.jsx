import { Outlet } from "react-router-dom";
// import Navber from "./Pages/Navber";
import Footer from "./Pages/Footer";
// import SignupPage from "./RegistonPage/SignupPage";
// import LoginPage from "./RegistonPage/LoginPage";
import Navbar1 from "./Pages/Navbar1";


const MainPage = () => {
    return (
        <div>
            <Navbar1></Navbar1>
            {/* <Navber></Navber> */}
            {/* <LoginPage></LoginPage> */}
            {/* <SignupPage></SignupPage> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;