import React, { Suspense, useEffect, useState } from "react";

import App from "../App/App";

const Apps = ({ data }) => {
  //   const [allApps, setAllApps] = useState([]);
  //   useEffect(() => {
  //     fetch("apps.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllApps(data);
  //       });
  //   }, []);

  // const appPromise = fetch("apps.json").then((res) => res.json());

  return (
    <div>
      <div className="text-center mt-20 mb-10">
        <h1 className="text-[#040031] font-bold text-5xl mb-4">
          Trending Apps
        </h1>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          {data.map((singleApp) => (
            <App key={singleApp.id} singleApp={singleApp}></App>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Apps;
