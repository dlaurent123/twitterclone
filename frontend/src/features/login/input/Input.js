import React from "react";

const Input = ({ value, setValue, spanName }) => {
  return (
    <div className="inputDiv">
      <label>
        <div className="spanDiv">
          <span className="input">{spanName}</span>
        </div>
        <div className="inputCont">
          <input
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="loginInput"
          />
        </div>
      </label>
      <div className="other"></div>
    </div>
  );
};

export default Input;
