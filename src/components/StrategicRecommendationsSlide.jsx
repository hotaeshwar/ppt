import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlane, 
  faBriefcase, 
  faGlobe, 
  faBullhorn 
} from "@fortawesome/free-solid-svg-icons"; // Import Solid Icons

const StrategicRecommendationsSlide = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#001F3F] to-[#00234E] text-white px-6">
      {/* Main Content */}
      <div className="w-full max-w-5xl text-center">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-10 tracking-wide">
          <span className="text-white">STRATEGIC </span>
          <span className="text-[#F8B400]">RECOMMENDATIONS</span>
        </h1>

        {/* Recommendation Boxes */}
        <div className="grid grid-cols-2 gap-6">
          {/* Box 1 */}
          <div className="bg-white/10 border border-[#F8B400] rounded-xl p-6 shadow-lg hover:scale-105 transition-all flex flex-col items-center">
            {/* ✈️ Plane Icon */}
            <FontAwesomeIcon icon={faPlane} size="2x" className="text-[#F8B400] mb-2" />
            <p className="text-lg">
              <span className="text-[#F8B400]">Target foreign tourists</span> with premium hospitality experiences.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white/10 border border-[#F8B400] rounded-xl p-6 shadow-lg hover:scale-105 transition-all flex flex-col items-center">
            {/* 📊 Briefcase Icon */}
            <FontAwesomeIcon icon={faBriefcase} size="2x" className="text-[#F8B400] mb-2" />
            <p className="text-lg">
              <span className="text-[#F8B400]">Leverage Tricity's booming</span> corporate & event market.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white/10 border border-[#F8B400] rounded-xl p-6 shadow-lg hover:scale-105 transition-all flex flex-col items-center">
            {/* 🌍 Globe Icon */}
            <FontAwesomeIcon icon={faGlobe} size="2x" className="text-[#F8B400] mb-2" />
            <p className="text-lg">
              <span className="text-[#F8B400]">Strengthen branding</span> on travel platforms like Google Maps, Booking.com & MakeMyTrip.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white/10 border border-[#F8B400] rounded-xl p-6 shadow-lg hover:scale-105 transition-all flex flex-col items-center">
            {/* 📣 Bullhorn Icon */}
            <FontAwesomeIcon icon={faBullhorn} size="2x" className="text-[#F8B400] mb-2" />
            <p className="text-lg">
              <span className="text-[#F8B400]">Enhance digital marketing</span> through influencer collaborations & social media.
            </p>
          </div>
        </div>
      </div>

      {/* Page Number (Updated Style) */}
      <div className="absolute bottom-4 right-4 text-lg font-semibold bg-yellow-400 text-blue-900 rounded-full px-5 py-3 shadow-xl">
        07
      </div>
    </div>
  );
};

export default StrategicRecommendationsSlide;
