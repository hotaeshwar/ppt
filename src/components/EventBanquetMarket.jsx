import React from 'react';

const EventBanquetMarket = () => {
  return (
    <div className="relative w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
      {/* Title with Gradient Effect */}
      <h1 className="text-right text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-[#0055AA]">
        Event & Banquet Market
      </h1>

      {/* Cards Section */}
      <div className="flex justify-center items-center space-x-8">
        {/* Wedding Industry Card */}
        <div className="w-80 h-80 bg-gradient-to-br from-[#003366] to-[#0055AA] text-white rounded-full flex flex-col items-center justify-center text-center p-8 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-yellow-300">Wedding Industry</span> (North India)
          </h2>
          <p className="text-lg">
            Worth <span className="font-semibold text-yellow-300">INR 5,000,000 crore</span>, 
            with Tricity contributing <span className="font-semibold text-yellow-300">INR 500 crore</span> annually.
          </p>
        </div>

        {/* Corporate Card */}
        <div className="w-80 h-80 bg-gradient-to-br from-[#003366] to-[#0055AA] text-white rounded-full flex flex-col items-center justify-center text-center p-8 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-yellow-300">Corporate</span> Market
          </h2>
          <p className="text-lg">
            Corporate MICE spending in Chandigarh is growing by <span className="font-semibold text-yellow-300">12% YoY</span>.
          </p>
        </div>

        {/* Event-based Bookings Card */}
        <div className="w-80 h-80 bg-gradient-to-br from-[#003366] to-[#0055AA] text-white rounded-full flex flex-col items-center justify-center text-center p-8 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-yellow-300">Event-based</span> Bookings
          </h2>
          <p className="text-lg">
            Event-based bookings contribute <span className="font-semibold text-yellow-300">40%+</span> revenue to premium hotels.
          </p>
        </div>
      </div>

      {/* Page Number (Updated Style) */}
      <div className="absolute bottom-4 right-4 text-lg font-semibold bg-yellow-400 text-blue-900 rounded-full px-5 py-3 shadow-xl">
        05
      </div>
    </div>
  );
};

export default EventBanquetMarket;
