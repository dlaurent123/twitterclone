import React, { useState, useEffect } from "react";
import Input from "../../login/input/Input";
import FormFooter from "./formFooter/FormFooter";

const SignUpForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    name && email ? setIsDisabled(false) : setIsDisabled(true);
    setCount(name.length);
  }, [name, email]);

  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit} className="loginForm">
      <div className="cont1">
        <Input value={name} setValue={setname} spanName={"Name"} />
        <div className="countCont">
          <div className="spaceCont"></div>
          <div className="countDiv">
            <span>{count}/50</span>
          </div>
        </div>
      </div>
      <div className="cont1">
        <Input value={email} setValue={setemail} spanName={"Email"} />
      </div>
      <div className="linkInsert">
        <span>Use phone instead</span>
      </div>
      <FormFooter />
    </form>
  );
};

export default SignUpForm;
