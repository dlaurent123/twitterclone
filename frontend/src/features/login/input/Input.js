import React from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../../form/FormSlice";

const Input = ({ value, spanName, type, keyName }) => {
  const dispatch = useDispatch();

  return (
    <div className="inputDiv">
      <label>
        <div className="spanDiv">
          <span className="input">{spanName}</span>
        </div>
        <div className="inputCont">
          <input
            autoFocus={true}
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
