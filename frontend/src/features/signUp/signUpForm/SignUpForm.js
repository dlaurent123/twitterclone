import React, { useState, useEffect } from "react";
import Input from "../../login/input/Input";
import FormFooter from "./formFooter/FormFooter";
import { useSelector } from "react-redux";
import { formState } from "../../form/FormSlice";

const SignUpForm = () => {
  const [count, setCount] = useState(0);
  const state = useSelector(formState);

  useEffect(() => {
    if (state.name !== undefined) {
      setCount(state.name.length);
    }
  }, [state.name, state.email]);

  return (
    <form id="form1" className="loginForm">
      <div className="cont1">
        <Input
          required
          value={state.name ? state.name : ""}
          spanName={"Name"}
          keyName={"name"}
        />
        <div className="countCont">
          <div className="spaceCont"></div>
          <div className="countDiv">
            <span>{count}/50</span>
          </div>
        </div>
      </div>
      <div className="cont1">
        <Input
          type={"email"}
          value={state.email ? state.email : ""}
          spanName={"Email"}
          keyName={"email"}
        />
      </div>
      <div className="linkInsert">{/* <span>Use phone instead</span> */}</div>
      <FormFooter />
    </form>
  );
};

export default SignUpForm;
