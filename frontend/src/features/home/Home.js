import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import gif from "../../images/blue.png";
import { userState } from "../loggedInUserInfo/loggedInUserInfoSlice";
import "./css/home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const state = useSelector(userState);

  useEffect(() => {
    if (state.user) {
      setIsLoading(false);
    }
  }, [state.user]);

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
        </div>
      </div>
      <div className="searchSide">Search</div>
    </div>
  );
};

export default Home;
