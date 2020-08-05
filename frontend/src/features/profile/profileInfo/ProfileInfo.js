import React from "react";
import pro from "../../../images/user.png";
// import Button from "../../login/button/Button";

const ProfileInfo = () => {
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
      </div>
    </div>
  );
};

export default ProfileInfo;
