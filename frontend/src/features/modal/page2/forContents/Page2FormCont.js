import React from "react";
import Button from "../../../login/button/Button";
import FormTop from "./FormTop";
import FormTerms from "./FormTerms";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { formState, clearForm } from "../../../form/FormSlice";
import { useHistory } from "react-router-dom";
import { signUp } from "../../../../util/firebaseFunctions";
import { apiUrl } from "../../../../util/apiUrl";
import { updateModal } from "../../modalSlice";

const Page2FormCont = () => {
  const dispatch = useDispatch();

  const API = apiUrl();
  const state = useSelector(formState);
  const {
    userName,
    email,
    name,
    birthMonth,
    birthDay,
    birthYear,
    password,
  } = state;
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${API}/api/users/check`, {
        user_name: userName,
      });
      if (res.data.user) {
        alert(res.data.message);
      } else {
        let res = await signUp(email, password);
        await axios.post(`${API}/api/users`, {
          id: res.user.uid,
          userName,
          email,
          name,
          dob: `${birthMonth} ${birthDay} ${birthYear}`,
        });
        dispatch(updateModal());
        dispatch(clearForm());
        history.push("/home");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="form2Cont">
      <FormTop />
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
