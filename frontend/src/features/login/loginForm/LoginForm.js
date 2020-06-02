import React, { useState, useEffect } from "react";
import Input from "../input/Input";
import Button from "../button/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    email && password ? setIsDisabled(false) : setIsDisabled(true);
  }, [email, password]);
  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit} className="loginForm">
      <Input
        value={email}
        setValue={setEmail}
        spanName={"Phone, email, or username"}
      />
      <Input value={password} setValue={setPassword} spanName={"Password"} />
      <Button isDisabled={isDisabled} text={"Log on"} />
    </form>
  );
};

export default LoginForm;
