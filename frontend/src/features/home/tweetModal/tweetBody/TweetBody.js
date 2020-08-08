import React from "react";
import avi from "../../../../images/user.png";
import "../Css/tweetmodal.css";
import TweetContent from "../tweetContent/TweetContent";

const TweetBody = () => {
  return (
    <div className="tweetBody">
      <div className="tweetBodyContainer">
        <div className="tweetBodyContent">
          <div className="tweetAvi">
            <img alt="" src={avi} />
          </div>
          <TweetContent />
        </div>
      </div>
    </div>
  );
};

export default TweetBody;
