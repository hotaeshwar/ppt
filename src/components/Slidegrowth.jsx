import React from "react";
import { FaUserTie, FaBullhorn, FaHandshake, FaGift } from "react-icons/fa";

const StrategicRecommendationsSlide = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[#002060] p-8">
      {/* Content Wrapper */}
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Title */}
        <h1 className="text-white text-5xl font-extrabold tracking-wider">
          STRATEGIC <span className="text-white">RECOMMENDATIONS</span> <br />
          FOR <span className="text-white">GROWTH</span>
        </h1>

        {/* Recommendation Boxes */}
        <div className="mt-12 space-y-6 w-full">
          {/* Recommendation 1 */}
          <div className="flex items-center w-full">
            {/* Hexagonal Icon */}
            <div className="w-20 h-20 flex items-center justify-center bg-white border-4 border-[#002060] rounded-md shadow-lg">
              <FaUserTie size={32} className="text-[#002060]" />
            </div>
            {/* Orange Box */}
            <div className="bg-[#F39200] text-white p-4 w-full ml-[-20px] pl-12 rounded-r-lg shadow-md">
              <p className="text-lg font-medium">
                Focus on luxury travelers & corporate guests for premium offerings
              </p>
            </div>
          </div>

          {/* Recommendation 2 */}
          <div className="flex items-center w-full">
            <div className="w-20 h-20 flex items-center justify-center bg-white border-4 border-[#002060] rounded-md shadow-lg">
              <FaBullhorn size={32} className="text-[#002060]" />
            </div>
            <div className="bg-[#F39200] text-white p-4 w-full ml-[-20px] pl-12 rounded-r-lg shadow-md">
              <p className="text-lg font-medium">
                Leverage digital marketing, influencer collaborations & social media
              </p>
            </div>
          </div>

          {/* Recommendation 3 */}
          <div className="flex items-center w-full">
            <div className="w-20 h-20 flex items-center justify-center bg-white border-4 border-[#002060] rounded-md shadow-lg">
              <FaHandshake size={32} className="text-[#002060]" />
            </div>
            <div className="bg-[#F39200] text-white p-4 w-full ml-[-20px] pl-12 rounded-r-lg shadow-md">
              <p className="text-lg font-medium">
                Tie-ups with travel agencies, wedding planners & corporate event managers
              </p>
            </div>
          </div>

          {/* Recommendation 4 */}
          <div className="flex items-center w-full">
            <div className="w-20 h-20 flex items-center justify-center bg-white border-4 border-[#002060] rounded-md shadow-lg">
              <FaGift size={32} className="text-[#002060]" />
            </div>
            <div className="bg-[#F39200] text-white p-4 w-full ml-[-20px] pl-12 rounded-r-lg shadow-md">
              <p className="text-lg font-medium">
                Seasonal offers, festive packages & weekend getaway promotions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-6 right-6 text-white text-lg font-semibold bg-[#F39200] px-6 py-2 rounded-full shadow-lg">
        13
      </div>
    </div>
  );
};

export default StrategicRecommendationsSlide;
