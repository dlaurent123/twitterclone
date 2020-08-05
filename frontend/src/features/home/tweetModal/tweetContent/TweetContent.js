import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../../providers/AuthContext";
import { tweetFunction } from "../../../../util/tweetFunction";
import Button from "../../../login/button/Button";
import { useHistory } from "react-router-dom";

const TweetContent = ({ count, onChange }) => {
  const dispatch = useDispatch();
  const { currentUser, token } = useContext(AuthContext);
  const { id } = currentUser;
  const history = useHistory();

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
          <span>{count}/250</span>
        </div>
        <div className="tweetModalButtonContainer">
          <Button
            func={() => dispatch(tweetFunction(id, token, history))}
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
