import React, { useState } from "react";
import avi from "../../../../images/user.png";
import "../Css/tweetmodal.css";
import { useDispatch } from "react-redux";
import { updateForm } from "../../../form/FormSlice";
import TweetContent from "../tweetContent/TweetContent";

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
          <TweetContent onChange={onChange} count={count} />
        </div>
      </div>
    </div>
  );
};

export default TweetBody;
