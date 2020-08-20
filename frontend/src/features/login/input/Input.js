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
  wrapId,
  labelClassName,
  jsx,
}) => {
  const dispatch = useDispatch();

  return (
    <div id={divId} className="inputDiv">
      <div className={wrapId}>
        <label id={labelClassName}>
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
            {jsx}
          </div>
        </label>
      </div>
      <div className="other"></div>
    </div>
  );
};

export default Input;
