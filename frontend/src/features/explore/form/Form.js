import React from "react";
import Input from "../../login/input/Input";
import "./css/form.css";
import Button from "../../login/button/Button";
import { useDispatch } from "react-redux";
import { updateModal } from "../../modal/modalSlice";
const Form = () => {
  const dispatch = useDispatch();

  const func = () => {
    dispatch(updateModal());
  };
  return (
    <form>
      <Input
        keyName={"eEmail"}
        wrapId={"eWrap"}
        containerId={"eEContainerId"}
        divId={"exploreMailDiv"}
        spanName={"Phone, email, or username"}
      />
      <Input
        keyName={"ePass"}
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
