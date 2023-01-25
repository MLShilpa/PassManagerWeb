import { NavLink, Outlet } from "react-router-dom";
// import SignIn from '../signin/SignIn';
import "./Home.css";
import logo from "../../resources/images/logo.png";
import logo_mobile from "../../resources/images/logo_mobile.png";
function Home() {
  return (
    <div className="Body">
      <div className="Container">
        <div className="logoContainer">
          <img className="logo" src={logo} alt="Pass Manager Logo" />
          {/* <div className="logoTextDiv"> */}
          <p className="logoText">
            Protect & Manage every password in your business
          </p>
          {/* </div> */}
        </div>

        <div className="LogoContainerMobile">
          <img
            className="logoMobile"
            src={logo_mobile}
            alt="Pass Manager Logo"
          />
        </div>
        <div className="tabView">
          <nav className="tabBar">
            <NavLink
              to="/"
              className={(isActive) => (isActive ? "tab" : "active")}
            >
              <p className=" tabText">SIGN IN</p>
            </NavLink>
            <NavLink to="/SignUp" className="tab">
              <p className=" tabText">SIGN UP</p>
            </NavLink>
          </nav>
        </div>
        <div className="border"></div>
        <Outlet className="outlet" />
      </div>
    </div>
  );
}

export default Home;
