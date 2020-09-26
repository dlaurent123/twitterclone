import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import gif from "../../images/blue.png";
import { userState } from "../loggedInUserInfo/loggedInUserInfoSlice";
import "./css/home.css";

import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import Posts from "../posts/Posts";
import SearchInput from "../searchInput/SearchInput";
import SearchItems from "../searchItems/SearchItems";
import { getAllPosts } from "../../util/getAllPosts";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const state = useSelector(userState);
  const API = apiUrl();
  const { token } = useContext(AuthContext);
  const posts = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts(token));
    if (state.user) {
      setIsLoading(false);
    }
  }, [state.user, API, token, dispatch]);

  if (isLoading) {
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
                <span className="bannerSpan">Home</span>
              </h2>
            </div>
          </div>
          <div className="postsDivScroll">
            <Posts posts={posts} />
          </div>
        </div>
      </div>
      <div className="searchSide">
        <SearchItems />
      </div>
    </div>
  );
};

export default Home;
