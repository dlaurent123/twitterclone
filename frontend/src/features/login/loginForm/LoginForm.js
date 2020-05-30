import React, { useState } from "react";
import Input from "../input/Input";
const spanName1 = "Phone, email, or username";
const spanName2 = "Password";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit} className="loginForm">
      <Input value={email} setValue={setEmail} spanName={spanName1} />
      <Input value={password} setValue={setPassword} spanName={spanName2} />
      <div className="buttonDiv">
        <button disabled={true} type="submit">
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
