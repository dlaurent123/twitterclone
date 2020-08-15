import React from "react";
import Input from "../login/input/Input";
import search from "../../images/search.png";
import "./css/searchInput.css";

const SearchInput = () => {
  return (
    <div className="search">
      <Input
        imgDivId={"searchImgDiv"}
        src={search}
        containerId={"searcInputCont"}
        id={"sI"}
        placeholder={"Search Twitter"}
        divId={"sIDiv"}
        labelClassName={"searchLabel"}
      />
    </div>
  );
};

export default SearchInput;
