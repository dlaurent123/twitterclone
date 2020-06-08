import React, { useEffect } from "react";
import Input from "../../login/input/Input";
import "./css/form.css";
import Button from "../../login/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "../../modal/modalSlice";
import { errState } from "../../err/errSlice";
import { logInFunction } from "../../../util/logInFunction";
import { clearErr } from "../../err/errSlice";
import { formState } from "../../form/FormSlice";

const Form = () => {
  const dispatch = useDispatch();
  const err = useSelector(errState);
  const state = useSelector(formState);
  const { loginE, loginP } = state;

  useEffect(() => {
    dispatch(clearErr());
  }, [loginE, loginP, dispatch]);

  const func = () => {
    dispatch(updateModal());
  };
  return (
    <form onSubmit={(e) => dispatch(logInFunction(e))}>
      <Input
        keyName={"loginE"}
        wrapId={"eWrap"}
        containerId={"eEContainerId"}
        divId={"exploreMailDiv"}
        spanName={"Phone, email, or username"}
      />
      {err ? <span id="err">{err}</span> : null}
      <Input
        keyName={"loginP"}
        wrapId={"pWrap"}
        containerId={"ePContainerId"}
        divId={"explorePassDiv"}
        spanName={"Password"}
      />
      <div className="forgotP">
        <span>Forgot Password?</span>
      </div>
      <Button buttonId={"eLogIn"} bDivId={"eLogIn"} text={"Log in"} />
      <div className="or">
        <span>or</span>
      </div>
      <Button
        func={func}
        buttonId={"eSignUp"}
        bDivId={"eSignUp"}
        text={"Sign up"}
      />
    </form>
  );
};

export default Form;
