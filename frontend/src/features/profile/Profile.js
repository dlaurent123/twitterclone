import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthContext } from "../../providers/AuthContext";
import { userState } from "../loggedInUserInfo/loggedInUserInfoSlice";
import gif from "../../images/blue.png";
import back from "../../images/left-arrow.png";
import "./css/profile.css";
import ProfileInfo from "./profileInfo/ProfileInfo";
import Posts from "../posts/Posts";
import SearchItems from "../searchItems/SearchItems";
import { getUsersPosts } from "../../util/getUsersPosts";

const Profile = () => {
  const { currentUser, token } = useContext(AuthContext);
  const state = useSelector(userState);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const posts = useSelector((state) => state.posts.usersPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersPosts(currentUser.id, token));
    if (state.user !== null) {
      setLoading(false);
    }
  }, [state.user, currentUser, dispatch, token, posts.length]);

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
                  {posts.length} Tweets
                </span>
              </h2>
            </div>
          </div>

          <div className="postsDivScroll">
            <div className="profileInfo flexC">
              <ProfileInfo user={state.user} />
            </div>
            <Posts
              posts={posts}
              name={state.user.name}
              userName={state.user.user_name}
            />
          </div>
        </div>
      </div>
      <div className="searchSide">
        <SearchItems />
      </div>
    </div>
  );
};

export default Profile;
