import React from "react";
import Options from "./options/Options";
import selectImg from "../../images/download.png";
const Select = ({ id, value, setValue, spanName, optionValues }) => {
  return (
    <div id={id} className="inputDiv">
      <label>
        <div id="spanId" className="spanDiv">
          <span className="input">{spanName}</span>
        </div>
        <div id="selectD" className="inputCont">
          <select
            id={value}
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="loginInput"
          >
            <option defaultValue></option>
            <Options values={optionValues} />
          </select>
          <img alt="" src={selectImg} className="selectImg"></img>
        </div>
      </label>
      <div className="other"></div>
    </div>
  );
};

export default Select;
