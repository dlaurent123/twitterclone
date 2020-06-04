import React from "react";
import Button from "../../../login/button/Button";
import FormTop from "./FormTop";
import FormTerms from "./FormTerms";
import axios from "axios";
import { useSelector } from "react-redux";
import { formState } from "../../../form/FormSlice";
import { useHistory } from "react-router-dom";

const Page2FormCont = ({ setValues }) => {
  const state = useSelector(formState);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("/api/users/check", {
        user_name: state.userName,
      });
      if (res.data.user) {
        alert(res.data.message);
      } else {
        await axios.post("/api/users", {
          id: 30,
          userName: state.userName,
          email: state.email,
          name: state.name,
          dob: `${state.birthMonth} ${state.birthDay} ${state.birthYear}`,
        });
        history.push("/feed");
      }
    } catch (error) {}
  };

  return (
    <div className="form2Cont">
      <FormTop setValues={(setValues.setUserName, setValues.setPassword)} />
      <FormTerms />
      <Button
        func={submit}
        buttonId={"page2Button"}
        bDivId={"bDivId"}
        text={"Sign up"}
      />
    </div>
  );
};

export default Page2FormCont;
