import React from "react";
import Input from "../login/input/Input";
import search from "../../images/search.png";

const SearchInput = () => {
  return (
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
  );
};

export default SearchInput;
