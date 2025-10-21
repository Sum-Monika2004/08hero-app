import React from "react";
import { NavLink } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import errorAppImg from "../../assets/App-Error.png";

const ErrorApp = () => {
  return (
    <div>
      <Header></Header>
      <div className="p-18 flex-col justify-center items-center text-center space-y-4">
        <img className="mx-auto" src={errorAppImg} />
        <h1 className="text-5xl font-semibold ">OPPS!! APP NOT FOUND</h1>
        <h2 className="text-xl text-gray-500">
          The App you are requesting is not found on our system. please try
          another apps
        </h2>
        <NavLink to="/">
          <button className="btn px-7 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
            Go Back!
          </button>
        </NavLink>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorApp;
