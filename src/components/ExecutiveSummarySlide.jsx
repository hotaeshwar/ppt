import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Import FontAwesome Icon
import hotelBgImage from "/src/assets/images/hotel-room-bg.jpg";

const ExecutiveSummarySlide = () => {
  return (
    <div className="relative h-screen w-full flex">
      
      {/* Left Side - Blue Background with Text */}
      <div className="w-1/2 bg-[#00256C] text-white flex flex-col justify-center px-20 py-12">
        
        {/* Large Quotation Mark Icon */}
        <FaQuoteLeft className="text-[120px] text-white opacity-30 -mb-10" />

        {/* Title */}
        <h1 className="text-[65px] font-semibold leading-tight">
          EXECUTIVE <br /> SUMMARY
        </h1>

        {/* Subtitle */}
        <p className="text-2xl mt-6 leading-snug">
          Welcome to the Demographic Research Report for{" "}
          <span className="text-[#F2A83B]">Voco Hotel Panchkula</span>.
        </p>

        {/* Two-column Info Section */}
        <div className="grid grid-cols-2 gap-12 mt-8">
          
          {/* Left Column - Market Segments */}
          <div>
            <p className="text-lg font-light mb-4 leading-relaxed">
              This report provides valuable insights into market trends, target audience, and strategic business opportunities for attracting diverse customer segments, including:
            </p>
            <ul className="list-disc pl-6 text-lg space-y-3 leading-relaxed">
              <li>Corporate travelers</li>
              <li>Luxury seekers</li>
              <li>Backpackers</li>
              <li>Event organizers</li>
            </ul>
          </div>

          {/* Right Column - Strategic Location */}
          <div>
            <p className="text-lg font-light mb-4 leading-relaxed">
              With its strategic location near Chandigarh, Panchkula, and Mohali, and along the Manali-Delhi Highway, Voco Hotel Panchkula is well-positioned to capitalize on:
            </p>
            <ul className="list-disc pl-6 text-lg space-y-3 leading-relaxed">
              <li>Tourism</li>
              <li>Corporate MICE events</li>
              <li>Growing hospitality sector</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Right Side - White Background with Image */}
      <div className="w-1/2 bg-white flex items-center justify-center relative">
        <div className="border-[10px] border-white shadow-lg">
          <img
            src={hotelBgImage}
            alt="Voco Hotel Room"
            className="w-[90%] h-auto object-cover"
          />
        </div>
      </div>

      {/* Page Number (New Style) */}
      <div className="absolute bottom-4 right-4 text-lg font-semibold bg-yellow-400 text-blue-900 rounded-full px-5 py-3 shadow-xl">
        02
      </div>
    </div>
  );
};

export default ExecutiveSummarySlide;
