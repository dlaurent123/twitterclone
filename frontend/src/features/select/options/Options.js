import React from "react";

const Options = ({ values }) => {
  return values.map((element) => {
    return (
      <option key={element} value={element}>
        {element}
      </option>
    );
  });
};

export default Options;
