import React from "react";

const CompetitiveLandscapeSlide = () => {
  return (
    <div className="relative w-full h-screen bg-[#002366] flex flex-col justify-center items-center px-8 text-center">
      {/* Title */}
      <h1 className="text-5xl font-bold text-white mb-12">
        <span className="block">COMPETITIVE LANDSCAPE</span>
        <span className="text-orange-400">Where Voco Stands</span>
      </h1>

      {/* Interlocked Circles */}
      <div className="relative flex items-center justify-center gap-[-20px]">
        {/* Competitors */}
        <div className="bg-white w-60 h-60 rounded-full shadow-lg flex flex-col justify-center items-center text-center relative border-4 border-white">
          <h3 className="text-xl font-bold text-blue-900">
            <span>Competitors</span>
          </h3>
          <ul className="text-blue-700 text-sm mt-2">
            <li><span>Taj Chandigarh</span></li>
            <li><span>Hyatt Regency</span></li>
            <li><span>ITC</span></li>
            <li><span>Radisson Zirakpur</span></li>
          </ul>
          {/* Arrow */}
          <div className="absolute top-6 -right-6 text-4xl text-blue-900">➜</div>
        </div>

        {/* Strengths */}
        <div className="bg-orange-400 w-64 h-64 rounded-full shadow-lg flex flex-col justify-center items-center text-center relative border-4 border-white -ml-8">
          <h3 className="text-xl font-bold text-white">
            <span>Strengths</span>
          </h3>
          <ul className="text-white text-sm mt-2">
            <li><span>Newer property</span></li>
            <li><span>Premium rooftop bar</span></li>
            <li><span>Flexible event spaces</span></li>
          </ul>
          {/* Arrow */}
          <div className="absolute bottom-6 -right-6 text-4xl text-white">↘</div>
        </div>

        {/* Pricing Strategy */}
        <div className="bg-white w-60 h-60 rounded-full shadow-lg flex flex-col justify-center items-center text-center relative border-4 border-white -ml-8">
          <h3 className="text-xl font-bold text-blue-900">
            <span>Pricing Strategy</span>
          </h3>
          <ul className="text-blue-700 text-sm mt-2">
            <li><span>Competitive in luxury mid-segment</span></li>
            <li><span>High value-for-money</span></li>
          </ul>
          {/* Arrow */}
          <div className="absolute top-6 -right-6 text-4xl text-blue-900">➜</div>
        </div>

        {/* Growth Potential */}
        <div className="bg-orange-400 w-64 h-64 rounded-full shadow-lg flex flex-col justify-center items-center text-center relative border-4 border-white -ml-8">
          <h3 className="text-xl font-bold text-white">
            <span>Growth Potential</span>
          </h3>
          <ul className="text-white text-sm mt-2">
            <li><span>Increased brand recognition</span></li>
            <li><span>Strategic partnerships</span></li>
          </ul>
        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-4 right-4 text-white text-lg font-semibold bg-orange-400 px-4 py-2 rounded-full">
        <span>12</span>
      </div>
    </div>
  );
};

export default CompetitiveLandscapeSlide;
