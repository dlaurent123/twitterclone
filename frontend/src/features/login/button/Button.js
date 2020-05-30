import React from "react";

const Button = ({ isDisabled }) => {
  return (
    <div className="buttonDiv">
      {isDisabled ? (
        <button
          style={{ backgroundColor: "#18608E", color: "#8A8F95" }}
          disabled={isDisabled}
          type="submit"
        >
          {" "}
          Log in{" "}
        </button>
      ) : (
        <button disabled={isDisabled} type="submit">
          Log in
        </button>
      )}
    </div>
  );
};

export default Button;
