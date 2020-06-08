import React from "react";
import ImageAndSearch from "./imgAndSearch/ImageAndSearch";
import HeadButtons from "./buttons/HeadButtons";

const Head = () => {
  return (
    <header>
      <div className="head">
        <div className="headContainer">
          <div className="headContents">
            <ImageAndSearch />
            <HeadButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;
