import React, { useState } from "react";
import Page2FormCont from "./forContents/Page2FormCont";
import { useDispatch } from "react-redux";
import { updateForm } from "../../form/FormSlice";

const Page2Form = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(updateForm({ userName, password }));
  };
  return (
    <form onSubmit={onSubmit} className="loginForm">
      <Page2FormCont setValues={{ setPassword, setUserName }} />
    </form>
  );
};

export default Page2Form;
