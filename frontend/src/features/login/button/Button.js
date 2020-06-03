import React from "react";

const Button = ({ func, isDisabled, text, buttonId, bDivId }) => {
  return (
    <div id={bDivId} className="buttonDiv">
      {isDisabled ? (
        <button
          onClick={func}
          id={buttonId}
          style={{ backgroundColor: "#18608E", color: "#8A8F95" }}
          disabled={isDisabled}
          type="submit"
        >
          {" "}
          {text}{" "}
        </button>
      ) : (
        <button onClick={func} disabled={isDisabled} type="submit">
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
