import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../Utility/AddToDb";
import Installed from "../Installed/Installed";

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  const [sort, setSort] = useState();
  const data = useLoaderData();

  const normalizeDownloads = (downloadsString) => {
    const str = String(downloadsString).toUpperCase().trim();
    const number = parseFloat(str);

    if (isNaN(number)) {
      return 0;
    }

    if (str.endsWith("M")) {
      return number * 1000000;
    } else if (str.endsWith("K")) {
      return number * 1000;
    } else {
      return number;
    }
  };

  const handleSort = (type) => {
    const listToSort = [...installList];

    if (type === "High-Low") {
      listToSort.sort((a, b) => {
        const downloadsA = normalizeDownloads(a.downloads);
        const downloadsB = normalizeDownloads(b.downloads);

        return downloadsB - downloadsA;
      });
    } else if (type === "Low-High") {
      listToSort.sort((a, b) => {
        const downloadsA = normalizeDownloads(a.downloads);
        const downloadsB = normalizeDownloads(b.downloads);

        return downloadsA - downloadsB;
      });
    } else {
    }

    setInstallList(listToSort);
    setSort(type);
  };

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
        <details className="dropdown">
          <summary className="btn m-1">Sort By : {sort ? sort : ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("High-Low")}>High-Low</a>
            </li>
            <li>
              <a onClick={() => handleSort("Low-High")}>Low-High</a>
            </li>
          </ul>
        </details>
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
