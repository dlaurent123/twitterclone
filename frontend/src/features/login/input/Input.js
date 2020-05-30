import React from "react";

const Inputs = () => {
  return (
    <>
      <div className="inputDiv">
        <label>
          <div className="spanDiv">
            <span className="input">Phone, email, or username</span>
          </div>
          <div className="inputCont">
            <input className="loginInput" />
          </div>
        </label>
        <div className="other"></div>
      </div>

      <div className="inputDiv">
        <label>
          <div className="spanDiv">
            <span className="input">Password</span>
          </div>
          <div className="inputCont">
            <input className="loginInput" />
          </div>
        </label>
        <div className="other"></div>
      </div>
    </>
  );
};

export default Inputs;
