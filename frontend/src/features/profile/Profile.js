import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../providers/AuthContext";
import { userState } from "../loggedInUserInfo/loggedInUserInfoSlice";
import gif from "../../images/blue.png";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const state = useSelector(userState);
  const [loading, setLoading] = useState(true);
  console.log(state.user);

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
              <h2>
                <span style={{ fontSize: "24px" }} className="bannerSpan">
                  {state.user.name}
                </span>
              </h2>
            </div>
          </div>
          <div className="postsDivScroll">{/* <Posts /> */}</div>
        </div>
      </div>
      <div className="searchSide">Search</div>
    </div>
  );
};

export default Profile;
