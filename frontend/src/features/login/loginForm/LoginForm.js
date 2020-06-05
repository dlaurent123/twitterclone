import React, { useState, useEffect } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { logIn } from "../../../util/firebaseFunctions";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formState, clearForm } from "../../form/FormSlice";

const LoginForm = () => {
  const [err, setErr] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const state = useSelector(formState);
  const { loginE, loginP } = state;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    loginE && loginP ? setIsDisabled(false) : setIsDisabled(true);
  }, [loginE, loginP]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(loginE, loginP);
      history.push("/home");
      dispatch(clearForm());
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="loginForm">
      <Input
        keyName={"loginE"}
        value={loginE ? loginE : ""}
        spanName={"Phone, email, or username"}
      />
      {err ? (
        <span id="err" style={{}}>
          {err}
        </span>
      ) : null}
      <Input
        type={"password"}
        keyName={"loginP"}
        value={loginP ? loginP : ""}
        spanName={"Password"}
      />
      <Button func={onSubmit} isDisabled={isDisabled} text={"Log on"} />
    </form>
  );
};

export default LoginForm;
