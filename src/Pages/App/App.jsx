import React, { use } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const App = ({ singleApp }) => {
  return (
    <Link to={`/appDetails/${singleApp.id}`}>
      <div className="bg-white rounded-[4px] shadow-xl ">
        <div className="p-4 ">
          <img className="rounded-[4px] mx-auto" src={singleApp.image} />
          <p className="my-4 font-bold ">
            {singleApp.title}: {singleApp.companyName}
          </p>
          <div className="flex justify-between items-center ">
            <button className="btn bg-[#F1F5E8] border-none">
              <img className="w-4 h-4" src={downloadImg} />
              <span className="text-[#00D390]">{singleApp.downloads}</span>
            </button>
            <button className="btn bg-[#FFF0E1] border-none">
              <img className="w-4 h-4" src={ratingImg} />
              <span className="text-[#FF8811]">{singleApp.ratingAvg}</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
