import React from "react";
import errorImg from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div>
      <div className="p-18 flex-col justify-center items-center text-center space-y-4">
        <img className="mx-auto" src={errorImg} />
        <h1 className="text-5xl font-semibold ">Oops, page not found!</h1>
        <h2 className="text-xl text-gray-500">
          The page you are looking for is not available.
        </h2>
        <button className="btn px-7 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
