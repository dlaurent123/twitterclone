import React from "react";
import Button from "../../../login/button/Button";
import settings from "../../../../images/settings.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateModal } from "../../../modal/modalSlice";

const HeadButtons = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const func = () => {
    dispatch(updateModal());
  };
  const login = () => {
    history.push("/login");
  };

  return (
    <div className="headButts">
      <Button
        func={login}
        bDivId={"exploreLogIn"}
        buttonId={"exploreLogIn"}
        text={"Log in"}
      />
      <Button
        func={func}
        bDivId={"exploreSignUp"}
        buttonId={"exploreSignUp"}
        text={"Sign up"}
      />
      <div className="settings">
        <img alt="" src={settings} />
      </div>
    </div>
  );
};

export default HeadButtons;
