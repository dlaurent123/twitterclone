import React, { useState, useEffect } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { useSelector, useDispatch } from "react-redux";
import { formState } from "../../form/FormSlice";
import { logInFunction } from "../../../util/logInFunction";
import { errState, clearErr } from "../../err/errSlice";

const LoginForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const state = useSelector(formState);
  const { loginE, loginP } = state;
  const err = useSelector(errState);
  const dispatch = useDispatch();

  useEffect(() => {
    loginE && loginP ? setIsDisabled(false) : setIsDisabled(true);
    dispatch(clearErr());
  }, [loginE, loginP, dispatch]);

  return (
    <form onSubmit={(e) => dispatch(logInFunction(e))} className="loginForm">
      <Input keyName={"loginE"} spanName={"Phone, email, or username"} />
      {err ? <span id="err">{err}</span> : null}
      <Input type={"password"} keyName={"loginP"} spanName={"Password"} />
      <Button type={"submit"} isDisabled={isDisabled} text={"Log on"} />
    </form>
  );
};

export default LoginForm;
