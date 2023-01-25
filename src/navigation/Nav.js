import { BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "../screens/home/Home";
import SignIn from "../screens/signin/SignIn";
import SignUp from "../screens/signup/SignUp";
function Nav(){
    return(
        <div >
        <BrowserRouter>
        <Routes >
            <Route path="/" element ={<Home/>} >
                <Route  index element={<SignIn />}/>
                <Route path="/SignUp" element={<SignUp />}/>
            </Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default Nav;