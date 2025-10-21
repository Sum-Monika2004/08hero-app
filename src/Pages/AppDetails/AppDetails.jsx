import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { addToDb } from "../../Utility/AddToDb";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  const singleApp = data.find((app) => app.id === appId);
  const {
    image,
    companyName,
    title,
    size,
    ratings,
    description,
    downloads,
    ratingAvg,
    reviews,
  } = singleApp;

  const handleInstalled = (id) => {
    addToDb(id);

    // store with id
    // where to store
    // array or collection
    // if app already exist then show alert
    // if not exist then push in the collection
  };

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="flex items-center gap-10 border-b-1 mt-20 mb-10 border-gray-300">
        <img className="mb-10 w-[360px]" src={image} />
        <div className="mb-10">
          <div className="border-b-1 border-gray-300">
            <h1 className="my-4 font-bold text-3xl">
              {title}: {companyName}
            </h1>
            <p className="text-[#627382] text-[16px] font-semibold mb-10">
              Developed by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
                {" "}
                productive.io
              </span>
            </p>
          </div>
          <div className="mt-8 ">
            <div className="flex gap-25 mb-3">
              <div>
                <img className="mb-2" src={downloadImg} alt="" />
                <h2 className="font-semibold text-xl text-gray-500 mb-2">
                  Downloads
                </h2>
                <h1 className="text-[#040031] font-bold text-4xl mb-4">
                  {downloads}
                </h1>
              </div>
              <div>
                <img className="mb-2" src={ratingImg} alt="" />
                <h2 className="font-semibold text-xl text-gray-500 mb-2">
                  Average Rating
                </h2>
                <h1 className="text-[#040031] font-bold text-4xl mb-4">
                  {ratingAvg}
                </h1>
              </div>
              <div>
                <img className="mb-2" src={reviewImg} alt="" />
                <h2 className="font-semibold text-xl text-gray-500 mb-2">
                  Total Reviews
                </h2>
                <h1 className="text-[#040031] font-bold text-4xl mb-4">
                  {reviews}
                </h1>
              </div>
            </div>
            {/* install button */}
            <div>
              <button
                onClick={() => handleInstalled(id)}
                className="btn p-5 text-[16px] bg-[#00D390] text-white font-semibold"
              >
                Install Now ({size} Mb)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pb-10 border-b-1 border-gray-300">
        <h1 className="mb-6 text-2xl font-bold">Ratings</h1>
        <BarChart
          layout="vertical"
          width={"100%"}
          height={400}
          data={singleApp.ratings}
        >
          <XAxis
            dataKey="count"
            type="number"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="count" fill="#ff8c00 " barSize={25} />
        </BarChart>
      </div>
      <div className="mt-10 mb-20">
        <h1 className="mb-6 text-2xl font-bold">Description</h1>
        <p className="text-[18px] text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
