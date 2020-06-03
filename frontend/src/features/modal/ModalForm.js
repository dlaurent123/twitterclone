import React from "react";
import SignUpForm from "../signUp/signUpForm/SignUpForm";

const ModalForm = () => {
  return (
    <div className="suForm">
      <div className="suFormCont">
        <h1 style={{ color: "white" }}>
          <span>Create your account</span>
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default ModalForm;
