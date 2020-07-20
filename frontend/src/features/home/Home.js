import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import gif from "../../images/blue.png";
import { userState } from "../loggedInUserInfo/loggedInUserInfoSlice";

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

  return <div>HOME</div>;
};

export default Home;
