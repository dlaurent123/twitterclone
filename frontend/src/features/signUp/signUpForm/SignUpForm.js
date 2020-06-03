import React, { useState, useEffect } from "react";
import Input from "../../login/input/Input";
import FormFooter from "./formFooter/FormFooter";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, formState } from "../../form/FormSlice";

const SignUpForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector(formState);

  console.log(state);

  useEffect(() => {
    name && email ? setIsDisabled(false) : setIsDisabled(true);
    setCount(name.length);
  }, [name, email]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateForm({ name, email, birthMonth, birthYear, birthDay }));
  };

  return (
    <form onSubmit={onSubmit} className="loginForm">
      <div className="cont1">
        <Input
          value={state.name ? state.name : name}
          setValue={setname}
          spanName={"Name"}
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
          value={state.email ? state.email : email}
          setValue={setemail}
          spanName={"Email"}
        />
      </div>
      <div className="linkInsert">
        <span>Use phone instead</span>
      </div>
      <button type="submit">Test</button>
      <FormFooter
        values={{ birthMonth, birthDay, birthYear }}
        setValues={{ setBirthMonth, setBirthDay, setBirthYear }}
      />
    </form>
  );
};

export default SignUpForm;
