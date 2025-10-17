import React from "react";
import psLogo from "../../assets/ps-logo.png";
import asLogo from "../../assets/as-logo.png";
import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col text-center items-center">
        {/* title part */}

        <h3 className="text-7xl font-bold mt-15">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>{" "}
          Apps
        </h3>
        <p className="text-[#627382] text-xl mt-6 text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        {/* button part */}

        <p className="my-10">
          <a className="btn border-none font-bold text-xl" href="">
            <img className="h-8 w-8" src={psLogo} />
            Google Play
          </a>
          <a className="btn border-none font-bold text-xl" href="">
            <img className="h-8 w-8" src={asLogo} />
            App Store
          </a>
        </p>

        {/* image part */}

        <div>
          <img src={heroImg} />
        </div>
      </div>

      {/* review part */}

      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex text-center  items-center justify-center ">
        <div className="p-20">
          <h2 className="font-bold text-5xl mb-10">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex gap-20 md:gap-45 flex-col md:flex-row">
            <div className="">
              <h2 className="text-[16px]">Total Downloads</h2>
              <h1 className="text-[64px] font-extrabold">29.6M</h1>
              <h2 className="text-[16px]">21% more than last month</h2>
            </div>
            <div className="">
              <h2 className="text-[16px]">Total Reviews</h2>
              <h1 className="text-[64px] font-extrabold">906K</h1>
              <h2 className="text-[16px]">46% more than last month</h2>
            </div>
            <div className="">
              <h2 className="text-[16px]">Active Apps</h2>
              <h1 className="text-[64px] font-extrabold">132+</h1>
              <h2 className="text-[16px]">31 more will Launch</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
