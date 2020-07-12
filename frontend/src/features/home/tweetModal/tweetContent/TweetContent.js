import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../../providers/AuthContext";
import { tweetFunction } from "../../../../util/tweetFunction";
import Button from "../../../login/button/Button";

const TweetContent = ({ count, onChange }) => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const { id } = currentUser;

  return (
    <div className="tweetContent">
      <div className="tweetText">
        <form id="tweetForm">
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
            func={() => dispatch(tweetFunction(id))}
            form={"tweetForm"}
            isDisabled={count === 0 ? true : false}
            bDivId={"tweetModalButton"}
            text={"Tweet"}
          />
        </div>
      </div>
    </div>
  );
};

export default TweetContent;
