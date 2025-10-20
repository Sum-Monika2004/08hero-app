import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
const Installed = ({ a }) => {
  return (
    <div className="mb-4 shadow-sm">
      <div className="flex gap-3 p-5 rounded-xl bg-white items-center justify-between">
        <div className="flex gap-3 items-center">
          <img className="w-20 h-20 rounded-xl" src={a.image} />
          <div>
            <h1 className="text-xl font-semibold mb-2">
              {a.title}: {a.companyName}
            </h1>
            <div className="flex gap-5">
              <div className="flex gap-1 items-center">
                <img className="w-4 h-4" src={downloadImg} />
                <h1 className="text-[16px] font-medium text-[#00D390]">
                  {a.downloads}
                </h1>
              </div>
              <div className="flex gap-1 items-center">
                <img className="w-4 h-4" src={ratingImg} />
                <h1 className="text-[16px] font-medium text-[#FF8811]">
                  {a.ratingAvg}
                </h1>
              </div>
              <div className="text-[16px] font-medium text-gray-500">
                293 Mb
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn bg-[#00D390] text-white font-semibold">
            {" "}
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default Installed;
