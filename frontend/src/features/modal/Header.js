import React, { useEffect, useState } from "react";
import image from "../../images/whitebird.png";
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "../modal/modalSlice";
import { changePage } from "../page/pageSlice";
import cancel from "../../images/cross.png";
import { clearForm, formState } from "../form/FormSlice";
import Button from "../login/button/Button";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const state = useSelector(formState);
  useEffect(() => {
    state.name &&
    state.email &&
    state.birthMonth &&
    state.birthDay &&
    state.birthYear
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [
    state.name,
    state.email,
    state.birthMonth,
    state.birthYear,
    state.birthDay,
  ]);

  const onClick = () => {
    dispatch(updateModal());
    dispatch(clearForm());
  };
  const onNext = async () => {
    try {
      const res = await axios.post("/api/users/check", {
        email: state.email,
      });
      console.log(res);
      if (res.data.user) {
        alert("email alreay exists");
      } else {
        dispatch(changePage(2));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerItems">
          <div className="space">
            <img alt="" src={cancel} onClick={onClick} />
          </div>
          <div className="headerImg">
            <img alt="img" className="birdImg" src={image}></img>
          </div>
          <div className="nextButton">
            <Button func={onNext} isDisabled={isDisabled} text={"Next"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
