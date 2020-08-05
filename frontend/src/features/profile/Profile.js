import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../../providers/AuthContext";
import { userState } from "../loggedInUserInfo/loggedInUserInfoSlice";
import gif from "../../images/blue.png";
import back from "../../images/left-arrow.png";
import "./css/profile.css";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const state = useSelector(userState);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (state.user !== null) {
      setLoading(false);
    }
  }, [state.user]);

  if (loading) {
    return (
      <div className="loading">
        <img id="loadBird" alt="" src={gif} />
      </div>
    );
  }

  return (
    <div className="homeDiv top">
      <div className="feedDiv">
        <div className="feedCont">
          <div className="feedBanner">
            <div className="titleCont">
              <div id="space" className="space">
                <img
                  className="backImg"
                  alt=""
                  src={back}
                  onClick={() => history.push("/home")}
                />
              </div>
              <h2>
                <span
                  style={{ fontSize: "21px", margin: "unset" }}
                  className="bannerSpan"
                >
                  {state.user.name}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#8899A6",
                    margin: "unset",
                    fontWeight: "normal",
                  }}
                >
                  59 Tweets
                </span>
              </h2>
            </div>
          </div>

          <div className="postsDivScroll">
            <div className="profileInfo flexC">
              <ProfileInfo />
            </div>
            {/* <Posts /> */}
          </div>
        </div>
      </div>
      <div className="searchSide">Search</div>
    </div>
  );
};

export default Profile;
