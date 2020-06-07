import * as React from "react";
import "./css/main.css";
import hero from "../../../images/hero.png";
import Form from "../form/Form";

const Main = () => {
  return (
    <main>
      <div className="mainContents">
        <div className="mainContainer">
          <div className="mainDiv">
            <div className="homeFeedDiv"></div>
            <div className="mainLoginSignUp">
              <div className="LScontents">
                <div className="LScontainer">
                  <section>
                    <div className="heroDiv">
                      <img alt="" src={hero} />
                    </div>
                    <div className="heroTitle">
                      <span>See what’s happening in the world right now</span>
                    </div>
                    <Form />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
