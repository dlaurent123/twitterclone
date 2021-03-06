import React from "react";
import Input from "../login/input/Input";
import search from "../../images/search.png";
import "./css/searchInput.css";

const SearchInput = ({ id, labelClassName, divId, jsx }) => {
  // create an onChange function that allows user to search dynamiclly

  return (
    <div className="search search2">
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          imgDivId={"searchImgDiv"}
          src={search}
          containerId={"searcInputCont"}
          id={id}
          placeholder={"Search Twitter"}
          divId={divId}
          labelClassName={labelClassName}
          keyName={"search"}
          jsx={jsx}
        />
      </form>
    </div>
  );
};

export default SearchInput;
