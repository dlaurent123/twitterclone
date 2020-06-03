import React from "react";
import Page2FormCont from "./forContents/Page2FormCont";

const Page2Form = () => {
  const onSubmit = () => {};
  return (
    <form onSubmit={onSubmit} className="loginForm">
      <Page2FormCont />
    </form>
  );
};

export default Page2Form;
