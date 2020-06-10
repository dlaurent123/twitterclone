import React from "react";
import { logOut } from "../../util/firebaseFunctions";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const lo = () => {
    logOut();
  };
  return (
    <div>
      <button onClick={lo}>Log Out</button>
    </div>
  );
};

export default Home;
