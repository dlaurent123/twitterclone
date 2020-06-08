import React from "react";
import Input from "../../../login/input/Input";
import search from "../../../../images/search.png";
import back from "../../../../images/left-arrow.png";

const ImageAndSearch = () => {
  return (
    <div className="imgAndSearch">
      <div className="backDivv">
        <img id="searchBack" alt="" src={back} />
      </div>
      <div className="search">
        <Input
          imgDivId={"searchImgDiv"}
          src={search}
          containerId={"searcInputCont"}
          id={"searchInput"}
          placeholder={"Search Twitter"}
          divId={"searchDiv"}
        />
      </div>
    </div>
  );
};

export default ImageAndSearch;
