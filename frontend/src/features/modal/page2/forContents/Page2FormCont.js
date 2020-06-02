import React from "react";
import Button from "../../../login/button/Button";
import FormTop from "./FormTop";
import FormTerms from "./FormTerms";

const Page2FormCont = () => {
  return (
    <div className="form2Cont">
      <FormTop />
      <FormTerms />
      <Button buttonId={"page2Button"} bDivId={"bDivId"} text={"Sign up"} />
    </div>
  );
};

export default Page2FormCont;
