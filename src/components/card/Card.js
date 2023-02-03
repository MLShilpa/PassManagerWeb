import "./Card.css";
export const Card = () => {
    return(
        <div className="CConatiner">
            <div className="CTopDiv">
                <img className="CSiteLogo" alt="SiteLogo" src={require('../../resources/images/Insta.png')} />
                <div className="CtopRight">
                    <span className="CSiteName">Instagram</span>
                    <div className="CtopRightBottom">
                    <img className="CCopyImg" alt="Copy" src={require('../../resources/images/Copy.png')} />
                    <span className="CCopyText">Copy Password</span>
                    </div>
                </div>
            </div>
            <div className="CBottomDiv">
                  <a className="CSiteLink" href=" ">www.instagram.com</a>
            </div>
        </div>
    )
}

export const Card2 = (props) => {
    return(
        <div className="CConatiner">
            <div className="CTopDiv">
                <img className="CSiteLogo" alt="SiteLogo" src={require('../../resources/images/Insta.png')} />
                <div className="CtopRight">
                    <span className="CSiteName">{props.sitename}</span>
                    <div className="CtopRightBottom">
                    <img className="CCopyImg" alt="Copy" src={require('../../resources/images/Copy.png')} />
                    <span className="CCopyText">Copy Password</span>
                    </div>
                </div>
            </div>
            <div className="CBottomDiv">
                  <a className="CSiteLink" href=" ">www.instagram.com</a>
            </div>
        </div>
    )
}      