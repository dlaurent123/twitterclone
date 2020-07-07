import React, { useState } from "react";
import avi from "../../../../images/user.png";
import "../Css/tweetmodal.css";
import Button from "../../../login/button/Button";
import { useDispatch } from "react-redux";
import { updateForm } from "../../../form/FormSlice";

const TweetBody = () => {
  const dispatch = useDispatch();
  const [count, updateCount] = useState(0);

  const onChange = (e) => {
    dispatch(updateForm({ tweet: e.target.value }));
    updateCount(e.target.value.length);
  };
  return (
    <div className="tweetBody">
      <div className="tweetBodyContainer">
        <div className="tweetBodyContent">
          <div className="tweetAvi">
            <img alt="" src={avi} />
          </div>
          <div className="tweetContent">
            <div className="tweetText">
              <form>
                <textarea
                  onChange={onChange}
                  maxLength="250"
                  placeholder="What's Happening?"
                />
              </form>
            </div>
            <div className="tweetFooter">
              <div className="tweetAddOns"></div>
              <div className="tweetCount">
                <span>{count}/280</span>
              </div>
              <div className="tweetModalButtonContainer">
                <Button
                  isDisabled={count === 0 ? true : false}
                  bDivId={"tweetModalButton"}
                  text={"Tweet"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetBody;
