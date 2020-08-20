import React from "react";
import { Link } from "react-router-dom";

const Hashtags = ({ hashtags }) => {
  if (hashtags !== null) {
    return hashtags.map((element) => {
      return (
        <Link key={element} to={`/search/${element.slice(1, element.length)}`}>
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
