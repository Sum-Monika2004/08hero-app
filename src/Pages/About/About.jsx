import React, { Suspense, useState } from "react";

import App from "../App/App";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";
import ErrorApp from "../ErrorApp/ErrorApp";

const About = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? data.filter((a) => a.title.toLocaleLowerCase().includes(term))
    : data;
  const noResults = searchedApps.length === 0 && term.length > 0;

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mt-20 mb-10">
        <h1 className="text-[#040031] font-bold text-5xl mb-4">
          Our All Applications
        </h1>
        <p className="text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold ">{searchedApps.length} Apps Found</h1>
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
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="mb-20">
        {noResults ? (
          <ErrorApp></ErrorApp>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Suspense
              fallback={
                <span className="loading loading-dots loading-xl"></span>
              }
            >
              {searchedApps.map((singleApp) => (
                <App key={singleApp.id} singleApp={singleApp}></App>
              ))}
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
