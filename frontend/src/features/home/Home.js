import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import gif from "../../images/blue.png";
import { userState } from "../loggedInUserInfo/loggedInUserInfoSlice";
import "./css/home.css";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import Posts from "../posts/Posts";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const state = useSelector(userState);
  const API = apiUrl();
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState([
    {
      avatar: null,
      name: "deploy jones",
      post_body: "second test tweet",
      post_id: 17,
      post_image: null,
      post_time: "2020-07-18T15:09:35.027Z",
      user_id: "y15mmoTQeEWk5bc3M7mq0ZFTAqI3",
      user_name: "jones",
    },
  ]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        let res = await axios({
          method: "GET",
          url: `${API}/api/users/posts`,
          headers: {
            AuthToken: token,
          },
        });
        // debugger;
        // setPosts(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    // getAllPosts();
    if (state.user) {
      setIsLoading(false);
    }
  }, [state.user, API, token]);

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
          <Posts posts={posts} />
        </div>
      </div>
      <div className="searchSide">Search</div>
    </div>
  );
};

export default Home;
