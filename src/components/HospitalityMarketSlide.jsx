import React from 'react';

const HospitalityMarketSlide = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-blue-50 to-white flex flex-col p-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl"></div>
      </div>

      {/* Main Title with Dynamic Typography */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-4xl font-bold text-[#1A3B6C] mb-2">
          <span className="bg-gradient-to-r from-[#1A3B6C] to-blue-600 bg-clip-text text-transparent">
            Hospitality Market &
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-[#1A3B6C]">
          <span className="bg-gradient-to-r from-blue-600 to-[#1A3B6C] bg-clip-text text-transparent">
            Competitive Landscape
          </span>
        </h2>
      </div>

      {/* Horizontal Line with Animated Dots */}
      <div className="relative w-full h-1 bg-gray-300 mb-12">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex w-full justify-between">
          {[1, 2, 3, 4].map((dot, index) => (
            <div 
              key={dot} 
              className="w-4 h-4 bg-[#F5A623] rounded-full -translate-y-1/2 transform transition-all duration-300 hover:scale-150 hover:shadow-lg"
              style={{
                left: `${index * 33.33}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Boxes with Enhanced Interactivity */}
      <div className="grid grid-cols-4 gap-6 relative z-10">
        {[
          {
            title: "Hotel Occupancy",
            subtitle: "(India-wide):",
            content: "67.5% (2023-24), exceeding pre-pandemic levels.",
            bgClass: "bg-blue-100/50 hover:bg-blue-100"
          },
          {
            title: "ADR",
            subtitle: "(Average Daily Rate):",
            content: "INR 8,869 per night for premium properties.",
            bgClass: "bg-orange-100/50 hover:bg-orange-100"
          },
          {
            title: "Backpackers & budget",
            subtitle: "travelers:",
            content: "Backpackers & budget travelers (45%) seek affordable stay options but spend on F&B and experiences.",
            bgClass: "bg-green-100/50 hover:bg-green-100"
          },
          {
            title: "Luxury seekers",
            subtitle: "",
            content: "Luxury seekers (15%) prefer premium hotels, rooftop bars, and fine dining.",
            bgClass: "bg-purple-100/50 hover:bg-purple-100"
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className={`${item.bgClass} border border-gray-200 rounded-xl p-6 shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
          >
            <h2 className="text-xl font-semibold text-[#1A3B6C] mb-4">
              <span className="block">{item.title}</span>
              {item.subtitle && (
                <span className="text-sm block text-gray-600">{item.subtitle}</span>
              )}
            </h2>
            <p className="text-gray-700 font-medium">
              <span className="bg-white/50 rounded px-1">
                {item.content}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Page Number without Blinking Animation */}
      <div className="absolute bottom-6 right-6 bg-[#1A3B6C] text-white px-4 py-2 rounded-lg 
                      transition-all duration-300 
                      shadow-lg hover:shadow-2xl">
        <span className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            04
          </span>
        </span>
      </div>
    </div>
  );
};

export default HospitalityMarketSlide;