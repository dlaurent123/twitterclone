import React from "react";
import SearchInput from "../searchInput/SearchInput";
import Button from "../login/button/Button";
import { useHistory } from "react-router-dom";
import { formState } from "../form/FormSlice";
import { useSelector } from "react-redux";

const SearchItems = () => {
  const form = useSelector(formState);
  const history = useHistory();
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      className="searchItems"
    >
      <SearchInput id={"sI"} divId={"sIDiv"} labelClassName={"searchLabel"} />
      <Button
        func={() =>
          history.push(
            `/search/${
              form.search[0] === "#"
                ? form.search.slice(1, form.search.length)
                : form.search
            }`
          )
        }
        bDivId={"searchBut"}
        buttonId={"exploreLogIn"}
        text={"Search"}
        style={{ height: "35px", paddingRight: "unset" }}
      />
    </div>
  );
};

export default SearchItems;
