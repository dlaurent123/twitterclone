import React from "react";
import Input from "../../../login/input/Input";
import { useSelector } from "react-redux";
import { formState } from "../../../form/FormSlice";

const FormTop = ({ setValues, userName, password }) => {
  let state = useSelector(formState);

  return (
    <>
      <div className="cont1">
        <Input
          value={state.userName ? state.userName : userName}
          setValue={setValues.setUserName}
          spanName={"User Name"}
        />
        <div className="countCont">
          <div className="spaceCont"></div>
          <div className="countDiv"></div>
        </div>
      </div>
      <div className="cont1">
        <Input
          type={"password"}
          value={password}
          setValue={setValues.setPassword}
          spanName={"Password"}
        />
      </div>
    </>
  );
};

export default FormTop;
