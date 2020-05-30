import React, { useState, useEffect } from "react";
import Input from "../input/Input";

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
      <div className="buttonDiv">
        {isDisabled ? (
          <button
            style={{ backgroundColor: "#18608E", color: "#8A8F95" }}
            disabled={isDisabled}
            type="submit"
          >
            {" "}
            Log in{" "}
          </button>
        ) : (
          <button disabled={isDisabled} type="submit">
            Log in
          </button>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
