import React from "react";
import pro from "../../../images/user.png";
// import Button from "../../login/button/Button";
import pin from "../../../images/pin.png";

const ProfileInfo = ({ user }) => {
  return (
    <div className="pInfo flexC">
      <div className="bannerImg"></div>
      <div className="restInfo flexC">
        <div className="img_buttonDiv">
          <div className="proImgDiv">
            <img
              style={{ height: "inherit", width: "inherit" }}
              alt=""
              src={pro}
            />
          </div>
          <div>{/* <Button /> */}</div>
        </div>
        <div className="nameDiv flexC">
          <div className="nameDivCont">
            <div className="nameDivItems flexC">
              <div>
                <span
                  style={{
                    fontSize: "21px",
                    margin: "unset",
                    fontWeight: "800",
                  }}
                >
                  {user.name}
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#8899A6",
                    margin: "unset",
                    fontWeight: "normal",
                  }}
                >
                  @{user.user_name}
                </span>
              </div>
            </div>
            <div className="bioItems">
              <div>
                <span
                  style={{
                    fontSize: "15px",
                    color: "white",
                    lineHeight: "1.3125",
                  }}
                >
                  This is my bio || Do you like it?
                </span>
              </div>
            </div>

            <div className="bioItems">
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    marginRight: "5px",
                    display: "flex",
                  }}
                >
                  <img height="15px" alt="" src={pin} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#8899A6",
                      lineHeight: "1.3125",
                      margin: "unset",
                    }}
                  >
                    The Matrix [[[[[“Nyc”]]]]]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
