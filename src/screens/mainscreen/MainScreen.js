import "./MainScreen.css";
import logoMainScreen from "../../resources/images/logoMainScreen.png";
import { Card, Card2 } from "../../components/card/Card";
const data = [
  {
    id: 1,
    url: "wwww.twitter.com",
    sitename: "Twitter",
    logo: require("../../resources/images/Insta.png"),
    folder: "Social Media",
  },
  {
    id: 2,
    url: "wwww.twitter.com",
    sitename: "Twitter",
    logo: require("../../resources/images/Insta.png"),
    folder: "Social Media",
  },
];
const data1 = {
  id: 1,
  url: "wwww.twitter.com",
  sitename: "Twitter",
  logo: require("../../resources/images/Insta.png"),
  folder: "Social Media",
};
const MainScreen = () => {
  return (
    <div className="MSBody">
      <div className="MSSideBar"></div>
      <div className="MSMainContainer">
        <div className="MSHeader">
          <img
            className="MSlogo"
            src={logoMainScreen}
            alt="Pass Manager Logo"
          />
          <div className="MSHeaderSideIcons">
            <img
              className="MSSyncIcon"
              src={require("../../resources/images/sync.png")}
              alt="Pass Manager Logo"
            />
            <img
              className="MSPrifileIcon"
              src={require("../../resources/images/profile.png")}
              alt="Pass Manager Logo"
            />
          </div>
        </div>
        <div className="MSSubHeader">
          <div>
            <p className="MSSites">Sites</p>
            <div className="MSSitesBorder" />
          </div>
          <div className="MSSubHeaderSide">
            <div className="MSSearchDiv">
              <input className="MSSearch" placeholder="Search" />
              <img
                className="MSSearchIcon"
                src={require("../../resources/images/search.png")}
                alt="SearchIcon"
              />
            </div>
            <img
              className="MSAddBtnIcon"
              src={require("../../resources/images/add_btn.png")}
              alt="AddBtn"
            />
          </div>
        </div>

        <div className="MSSocialMedia">
          <span className="MSSocialMediaText">Social Media</span>
          <div className="MSSocialMediaNumDiv">
            <span className="MSSocialMediaNum">07</span>
          </div>

        </div>
          {data ? (
            <>
            <div className="MScontainer">
              {data.map((item) => (
                <Card2 sitename={item.sitename} logo={item.logo} item={item} />
              ))}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
            </>
          ) : (
            <>
            <div className="MScontainer2 ">
              <div className="MsEmptyDiv">
                <span className="MsEmptyText">Please Click on the “+” symbol</span>
                <span className="MsEmptyText">to add sites</span>
              </div>
              </div>
            </>
          )}


      </div>
    </div>
  );
};
export default MainScreen;
