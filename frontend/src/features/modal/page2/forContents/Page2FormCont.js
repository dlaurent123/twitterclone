import React from "react";
import Button from "../../../login/button/Button";
import FormTop from "./FormTop";
import FormTerms from "./FormTerms";

const Page2FormCont = ({ setValues }) => {
  return (
    <div className="form2Cont">
      <FormTop setValues={(setValues.setUserName, setValues.setPassword)} />
      <FormTerms />
      <Button buttonId={"page2Button"} bDivId={"bDivId"} text={"Sign up"} />
    </div>
  );
};

export default Page2FormCont;
