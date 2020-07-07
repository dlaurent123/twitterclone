import React from "react";
import avi from "../../../../images/user.png";
import "../Css/tweetmodal.css";
import Button from "../../../login/button/Button";

const TweetBody = () => {
  return (
    <div className="tweetBody">
      <div className="tweetBodyContainer">
        <div className="tweetBodyContent">
          <div className="tweetAvi">
            <img alt="" src={avi} />
          </div>
          <div className="tweetContent">
            <div className="tweetText">
              <textarea maxLength="250" placeholder="What's Happening?" />
            </div>
            <div className="tweetFooter">
              <div className="tweetAddOns"></div>
              <div className="tweetModalButtonContainer">
                <Button bDivId={"tweetModalButton"} text={"Tweet"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetBody;
