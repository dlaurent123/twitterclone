import React from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/signup");
  };
  return (
    <div>
      Home
      <button onClick={redirect}>Sign Up</button>
    </div>
  );
};

export default Home;
