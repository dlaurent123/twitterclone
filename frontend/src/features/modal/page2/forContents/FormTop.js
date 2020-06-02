import React, { useState } from "react";
import Input from "../../../login/input/Input";

const FormTop = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="cont1">
        <Input value={userName} setValue={setUserName} spanName={"User Name"} />
        <div className="countCont">
          <div className="spaceCont"></div>
          <div className="countDiv"></div>
        </div>
      </div>
      <div className="cont1">
        <Input value={password} setValue={setPassword} spanName={"Password"} />
      </div>
    </>
  );
};

export default FormTop;
