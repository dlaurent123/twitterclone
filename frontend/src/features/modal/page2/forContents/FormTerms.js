import React from "react";

const FormTerms = () => {
  return (
    <span className="all">
      <div>
        <span className="white">By signing up, you agree to the</span>
      </div>
      <a href="https://twitter.com/tos">
        <span className="blue"> Terms of Service</span>
      </a>
      <div>
        <span className="white">and</span>
      </div>
      <a href="https://twitter.com/privacy">
        <span className="blue">Privacy Policy</span>
      </a>
      <div>
        <span className="white">, including </span>
      </div>
      <a href="https://support.twitter.com/articles/20170514">
        <span className="blue">Cookie Use</span>
      </a>
      <div>
        <span className="white">
          . Others will be able to find you by email or phone number when
        </span>
      </div>
      <div>
        <span className="white">provided · </span>
      </div>
      <div>
        <span className="blue"> Privacy Options</span>
      </div>
    </span>
  );
};

export default FormTerms;
