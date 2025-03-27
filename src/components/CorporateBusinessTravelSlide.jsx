import React from "react";

const CorporateBusinessTravelSlide = () => {
  return (
    <div className="relative w-full h-screen bg-blue-900 flex flex-col justify-center items-center px-8 text-center">
      {/* Title */}
      <h1 className="text-5xl font-bold text-white mb-8">
        <span className="text-yellow-400">CORPORATE</span> & BUSINESS <span className="text-yellow-400">TRAVEL</span> MARKET
      </h1>

      {/* Grid Content */}
      <div className="grid grid-cols-2 gap-6 w-4/5">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-900">Tricity IT & Business Hubs</h3>
          <p className="text-blue-700 text-sm">Infosys, Tech Mahindra, IT parks driving demand</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-900">Corporate Events & Conferences</h3>
          <p className="text-blue-700 text-sm">35% growth in hotel MICE bookings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-900">Business Travel Stays</h3>
          <p className="text-blue-700 text-sm">Avg. duration 2-3 nights, preference for premium amenities</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-900">Opportunity</h3>
          <p className="text-blue-700 text-sm">
            Position <span className="text-yellow-400 font-semibold">Voco Hotel</span> as a premium business stay destination
          </p>
        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-4 right-4 text-white text-lg font-semibold bg-yellow-400 px-4 py-2 rounded-full">
        11
      </div>
    </div>
  );
};

export default CorporateBusinessTravelSlide;
