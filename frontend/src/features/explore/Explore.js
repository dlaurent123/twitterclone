import React from "react";
import "./css/explore.css";
import Button from "../login/button/Button";
import settings from "../../images/settings.png";
import Input from "../login/input/Input";
import search from "../../images/search.png";
import back from "../../images/left-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { updateModal, modalState } from "../modal/modalSlice";
import ModalPage1 from "../modal/ModalPage1";
import ModalPage2 from "../modal/ModalPage2";
import { afterOpenModal, customStyles } from "../modal/helpers/helpers";
import { pageState } from "../page/pageSlice";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import Main from "./main/Main";

const Explore = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(modalState);
  const page = useSelector(pageState);
  const history = useHistory();
  const func = () => {
    dispatch(updateModal());
  };
  const login = () => {
    history.push("/login");
  };

  return (
    <>
      <div className="exploreMain">
        <header>
          <div className="head">
            <div className="headContainer">
              {/* contents start */}
              <div className="headContents">
                <div className="imgAndSearch">
                  <div className="backDivv">
                    <img id="searchBack" alt="" src={back} />
                  </div>
                  <div className="search">
                    <Input
                      imgDivId={"searchImgDiv"}
                      src={search}
                      containerId={"searcInputCont"}
                      id={"searchInput"}
                      placeholder={"Search Twitter"}
                      divId={"searchDiv"}
                    />
                  </div>
                </div>

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
              </div>
              {/* contents end */}
            </div>
          </div>
        </header>
      </div>
      <Main />
      <div className="signUpDiv">
        <div className="modalDiv">
          <Modal
            ariaHideApp={false}
            ariaModal={true}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {page === 1 ? <ModalPage1 /> : <ModalPage2 />}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Explore;
