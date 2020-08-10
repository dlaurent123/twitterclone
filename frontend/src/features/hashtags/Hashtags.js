import React from "react";
import { Link } from "react-router-dom";
const Hashtags = ({ hashtag, hashtag_id }) => {
  if (hashtag !== null) {
    let hashtagsArr = hashtag.split(" ");
    return hashtagsArr.map((element) => {
      return (
        <Link key={element} to={`/search/${element}`} id={hashtag_id}>
          <span
            className="hashSpan"
            style={{
              fontWeight: "400",
              fontSize: "15px",
              color: "#1B95E0",
              marginLeft: "5px",
            }}
          >
            {element}
          </span>
        </Link>
      );
    });
  } else {
    return <> </>;
  }
};

export default Hashtags;
