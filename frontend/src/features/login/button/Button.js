import React from "react";

const Button = ({ isDisabled, text, buttonId, bDivId }) => {
  return (
    <div id={bDivId} className="buttonDiv">
      {isDisabled ? (
        <button
          id={buttonId}
          style={{ backgroundColor: "#18608E", color: "#8A8F95" }}
          disabled={isDisabled}
          type="submit"
        >
          {" "}
          {text}{" "}
        </button>
      ) : (
        <button disabled={isDisabled} type="submit">
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
