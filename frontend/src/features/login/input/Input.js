import React from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../../form/FormSlice";

const Input = ({
  src,
  value,
  spanName,
  type,
  keyName,
  divId,
  placeholder,
  id,
  containerId,
  imgDivId,
}) => {
  const dispatch = useDispatch();

  return (
    <div id={divId} className="inputDiv">
      <label>
        <div className="spanDiv">
          <span className="input">{spanName}</span>
        </div>
        <div id={containerId} className="inputCont">
          <div id={imgDivId}>
            <img alt="" src={src} />
          </div>
          <input
            id={id}
            placeholder={placeholder}
            type={type}
            required
            value={value}
            onChange={(e) =>
              dispatch(updateForm({ [keyName]: e.target.value }))
            }
            className="loginInput"
          />
        </div>
      </label>
      <div className="other"></div>
    </div>
  );
};

export default Input;
