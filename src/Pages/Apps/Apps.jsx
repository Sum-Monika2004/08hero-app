import React, { Suspense, useEffect, useState } from "react";

import App from "../App/App";

const Apps = ({ data }) => {
  return (
    <div className="">
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
