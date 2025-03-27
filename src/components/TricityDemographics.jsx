import React from "react";
import { FaUsers, FaDollarSign, FaBuilding, FaHandsHelping } from "react-icons/fa";

const TricityDemographics = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003366] text-white p-8 relative">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-12">
          <span className="text-white">Tricity Demographics: </span>
          <span className="text-[#F8B400]">Chandigarh, Panchkula, Mohali</span>
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {/* Population */}
          <div className="flex flex-col items-center">
            <FaUsers className="text-5xl text-[#F8B400] mb-4" />
            <p className="text-xl font-bold">
              <span className="text-[#F8B400]">Population</span>
            </p>
            <p className="text-sm opacity-90">
              2.1 million+ with a mix of young professionals & affluent families
            </p>
          </div>

          {/* High Spending Capacity */}
          <div className="flex flex-col items-center">
            <FaDollarSign className="text-5xl text-[#F8B400] mb-4" />
            <p className="text-xl font-bold">
              <span className="text-[#F8B400]">High spending capacity</span>
            </p>
            <p className="text-sm opacity-90">
              Avg. annual income ₹8-12 lakh (upper middle class)
            </p>
          </div>

          {/* Corporate Hub */}
          <div className="flex flex-col items-center">
            <FaBuilding className="text-5xl text-[#F8B400] mb-4" />
            <p className="text-xl font-bold">
              <span className="text-[#F8B400]">Corporate hub</span>
            </p>
            <p className="text-sm opacity-90">
              500+ major companies, IT parks, and business centers
            </p>
          </div>

          {/* Luxury Event Demand */}
          <div className="flex flex-col items-center">
            <FaHandsHelping className="text-5xl text-[#F8B400] mb-4" />
            <p className="text-xl font-bold">
              <span className="text-[#F8B400]">Luxury event demand</span>
            </p>
            <p className="text-sm opacity-90">
              40% increase in banquet & premium event bookings post-pandemic
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="absolute bottom-5 right-5 text-white/20 text-5xl font-bold select-none">
          09
        </div>
      </div>
    </div>
  );
};

export default TricityDemographics;
