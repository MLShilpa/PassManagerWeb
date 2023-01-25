import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [mobileNum, setMobileNum] = useState(null);
  const [mpin,setMpin] = useState(null)
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
    <div className="SignUpContainer">
      <p className="SignUpText">SIGN UP</p>
      <form>
        <div className="boxAlignment">
          <input
            className="InputBox"
            title="Mobile Number"
            placeholder="Enter Mobile Number"
            onChange={(event) => {
              setMobileNum(event.target.value);
            }}
            value={mobileNum}
          />
          <input
            className="InputBox"
            title="Mpin"
            placeholder="Enter 4 Digit MPin"
            onChange={(event) => {
              setMpin(event.target.value);
            }}
            value={mpin}
          />
        </div>
        <div className="boxAlignment">
          <div className="ReEnterMpinBox">
            <input
              className="MpinInputBox"
              placeholder="Re-Enter 4 Digit Mpin"
              title="Confirm Mpin"
              value={passwordInput}
              type={passwordType}
              onChange={(event) => {
                setPasswordInput(event.target.value);
              }}
            />

            {passwordType === "password" ? (
              <button
                onClick={togglePassword}
                type={"button"}
                className="SUiconButton"
              >
                <img
                  className="SUeyeOn"
                  src={require("../../resources/images/eye_on.png")}
                  alt="logo"
                />
              </button>
            ) : (
              <button type={"button"} onClick={togglePassword}  className="SUiconButton">
                <img
                  className="SUeyeoff"
                  src={require("../../resources/images/eye_off.png")}
                  alt="logo"
                />
              </button>
            )}
          </div>
        </div>
        <button className="SUSigninButton"
                  type={"button"}
                  onClick={() => navigate("/")}
        >SIGN IN</button>
      </form>
    </div>
  );
}

export default SignUp;
