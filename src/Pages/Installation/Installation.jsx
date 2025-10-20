import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../Utility/AddToDb";
import Installed from "../Installed/Installed";

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedStoredApps = storedAppData.map((id) => parseInt(id));

    const myInsList = data.filter((app) =>
      convertedStoredApps.includes(app.id)
    );
    setInstallList(myInsList);
  }, []);

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="text-center mt-20 mb-10">
        <h1 className="text-[#040031] font-bold text-5xl mb-4">
          Your Installed Apps
        </h1>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold ">{installList.length} Apps Found</h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search Apps" />
        </label>
      </div>
      <div className="mb-20">
        {installList.map((a) => (
          <Installed a={a}></Installed>
        ))}
      </div>
    </div>
  );
};

export default Installation;
