import React from "react";
import Banner from "../../Components/Banner/Banner";
import Apps from "../Apps/Apps";
import { NavLink, useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="text-center mt-20 mb-10">
        <h1 className="text-[#040031] font-bold text-5xl mb-4">
          Trending Apps
        </h1>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <Apps data={data}></Apps>
      </div>

      <NavLink to="/about">
        <div className="mt-10 mb-20 flex">
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white font-semibold mx-auto">
            Show All
          </button>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
