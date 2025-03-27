import React from "react";

const KeyBusinessOpportunities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-[#00234E] flex items-center justify-center p-8 relative">
      <div className="w-full max-w-6xl relative text-white">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-12 tracking-wide text-[#F8B400] drop-shadow-lg">
          <span className="text-white">KEY </span> BUSINESS OPPORTUNITIES
        </h1>

        <div className="relative flex items-center justify-center">
          {/* Circular Orange Ring */}
          <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border-[30px] border-[#F68B1F] border-solid shadow-2xl"></div>
            {/* 4 Divider Lines */}
            <div className="absolute w-full h-full">
              <div className="absolute top-0 left-1/2 w-[6px] h-1/2 bg-[#00234E] -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-[6px] h-1/2 bg-[#00234E] -translate-x-1/2"></div>
              <div className="absolute left-0 top-1/2 h-[6px] w-1/2 bg-[#00234E] -translate-y-1/2"></div>
              <div className="absolute right-0 top-1/2 h-[6px] w-1/2 bg-[#00234E] -translate-y-1/2"></div>
            </div>
          </div>

          {/* Text & Arrows */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {/* Top Left - Highway Traveler Packages */}
            <div className="absolute top-[8%] left-[10%] w-64 text-left">
              <p className="text-xl font-bold text-[#F8B400]">
                <span className="text-white">Highway </span> Traveler Packages
              </p>
              <p className="text-sm opacity-90">
                Special offers for road trippers, weekend travelers, and overnight stays.
              </p>
              <div className="absolute -right-8 top-1/2 w-10 h-10 border-l-2 border-t-2 border-white rotate-[135deg]"></div>
            </div>

            {/* Top Right - Banquets & Events */}
            <div className="absolute top-[8%] right-[10%] w-64 text-right">
              <p className="text-xl font-bold text-[#F8B400]">
                <span className="text-white">Banquets </span> & Events
              </p>
              <p className="text-sm opacity-90">
                Targeting weddings, MICE events, and premium social gatherings.
              </p>
              <div className="absolute -left-8 top-1/2 w-10 h-10 border-r-2 border-t-2 border-white rotate-[-135deg]"></div>
            </div>

            {/* Bottom Left - Collaboration with Travel Operators */}
            <div className="absolute bottom-[12%] left-[10%] w-64 text-left">
              <p className="text-xl font-bold text-[#F8B400]">
                <span className="text-white">Collaboration </span> with Travel Operators
              </p>
              <p className="text-sm opacity-90">Exclusive tourist packages.</p>
              <div className="absolute -right-8 top-1/2 w-10 h-10 border-l-2 border-b-2 border-white rotate-[45deg]"></div>
            </div>

            {/* Bottom Right - Luxury Dining & Rooftop Experience */}
            <div className="absolute bottom-[12%] right-[10%] w-64 text-right">
              <p className="text-xl font-bold text-[#F8B400]">
                <span className="text-white">Luxury </span> Dining & Rooftop Experience
              </p>
              <p className="text-sm opacity-90">
                Enhancing F&B offerings with regional cuisine & seasonal promotions.
              </p>
              <div className="absolute -left-8 top-1/2 w-10 h-10 border-r-2 border-b-2 border-white rotate-[-45deg]"></div>
            </div>

            {/* Bottom Center - Seasonal Campaigns & Festive Discounts */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-64 text-center">
              <p className="text-xl font-bold text-[#F8B400]">
                <span className="text-white">Seasonal </span> Campaigns & Festive Discounts
              </p>
              <p className="text-sm opacity-90">Attracting high-value customers.</p>
            </div>
          </div>
        </div>

        {/* Page Number (Updated Style) */}
        <div className="absolute bottom-4 right-4 text-lg font-semibold bg-yellow-400 text-blue-900 rounded-full px-5 py-3 shadow-xl">
          06
        </div>
      </div>
    </div>
  );
};

export default KeyBusinessOpportunities;
