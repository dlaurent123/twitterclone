import React from "react";
import Input from "../../../login/input/Input";
import { useSelector } from "react-redux";
import { formState } from "../../../form/FormSlice";

const FormTop = ({ password }) => {
  let state = useSelector(formState);

  return (
    <>
      <div className="cont1">
        <Input
          value={state.userName ? state.userName : ""}
          spanName={"User Name"}
          keyName={"userName"}
        />
        <div className="countCont">
          <div className="spaceCont"></div>
          <div className="countDiv"></div>
        </div>
      </div>
      <div className="cont1">
        <Input
          keyName={"password"}
          type={"password"}
          value={password}
          spanName={"Password"}
        />
      </div>
    </>
  );
};

export default FormTop;
