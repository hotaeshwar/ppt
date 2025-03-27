import React from "react";

const TourismTrendsSlide = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-8 bg-gradient-to-br from-blue-900 to-gray-800 text-white">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-center mb-8 leading-tight drop-shadow-lg">
        Tourism Trends: <br />
        <span className="text-yellow-400 underline decoration-wavy">
          Highway Travelers
        </span>{" "}
        &{" "}
        <span className="bg-white text-blue-900 px-3 py-1 rounded-md shadow-lg">
          Shimla-Manali Visitors
        </span>
      </h2>

      {/* Content Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-6 shadow-2xl rounded-lg transform hover:scale-105 transition duration-300">
          <h3 className="font-extrabold text-xl">📈 16M+ Tourists</h3>
          <p className="text-sm mt-2 opacity-90">
            16M+ tourists visited Himachal Pradesh in 2023{" "}
            <span className="font-semibold">(10% growth from 2022)</span>
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-6 shadow-2xl rounded-lg transform hover:scale-105 transition duration-300">
          <h3 className="font-extrabold text-xl">🚗 Highway Upgrade</h3>
          <p className="text-sm mt-2 opacity-90">
            Travel time cut to <span className="font-semibold">6 hours</span>, boosting stopovers
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-teal-500 p-6 shadow-2xl rounded-lg transform hover:scale-105 transition duration-300">
          <h3 className="font-extrabold text-xl">🏨 Luxury Travel Boom</h3>
          <p className="text-sm mt-2 opacity-90">
            <span className="font-semibold">20% growth</span> in premium hotel stays along the highway
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-pink-500 p-6 shadow-2xl rounded-lg transform hover:scale-105 transition duration-300">
          <h3 className="font-extrabold text-xl">❄️ Peak Season</h3>
          <p className="text-sm mt-2 opacity-90">
            Summer, Winter vacations, <span className="font-semibold">Christmas-New Year rush</span>
          </p>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white opacity-10 clip-wave"></div>

      {/* Page Number (No Animation) */}
      <div className="absolute bottom-4 right-4 text-lg font-semibold bg-yellow-400 text-blue-900 rounded-full px-5 py-3 shadow-xl">
        10
      </div>
    </div>
  );
};

export default TourismTrendsSlide;
