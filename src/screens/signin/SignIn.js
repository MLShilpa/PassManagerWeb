import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();
  const [mobileNum, setMobileNum] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
        setPasswordType("password");
    }
   
   
  };
  return (
    <div className="SignInContainer">
       
      <form>
        <div className="SignInBoxAlignment">
        <p className="SignInText">
        SIGN IN TO YOUR ACCOUNT             
        </p>
          <input
            className="MobileNumBox"
            title="Mobile Number"
            type={'tel'}
            // maxLength={10}
            placeholder="Mobile Number"
            onChange={(event) => {
              setMobileNum(event.target.value);
            }}
            value={mobileNum}
          />
        </div>
        <div className="SignInBoxAlignment" style={{ marginBottom: "5px" }}>
          <div className="MpinBox">
            <input
              className="Text"
              placeholder="Mpin"
              title="Mpin"
              
              maxLength={4}
              inputMode={'numeric'}
              value={passwordInput}
              type={passwordType}
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
            />

            {passwordType === "password" ? ( 
              <button        
              onClick= {togglePassword} 
              type={'button'}
              className="iconButton"
              >
                <img
                  className="eyeOn"
                  src={require("../../resources/images/eye_on.png")}
                  alt="logo"
                  
                />
              </button>
            ) : (
                <button
                type={'button'}
                onClick={togglePassword}
                className="iconButton"
                >
                <img
                  className="eyeoff"
                  src={require("../../resources/images/eye_off.png")}
                  alt="logo"
                />
              </button>
            )}
          </div>
        </div>
        <div className="ForgotDiv">
          <p className="ForgotText">Forgot Your Password?</p>
        </div>
        <button className="SISignInButton">SIGN IN</button>
      </form>
      <p className="dontText">Don’t have a Account?
      <button className="DontSignUpButton"
      type={'button'}
      onClick={()=>navigate('/SignUp')}
      >SIGNUP</button>
      </p>
    </div>
  );
}

export default SignIn;
