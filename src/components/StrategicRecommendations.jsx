import React from 'react';
import roomImage from '/src/assets/images/room1.jpg'; // Replace with actual file paths
import keyCardImage from '/src/assets/images/room2.jpg';
import resortImage from '/src/assets/images/room3.jpg';

const StrategicRecommendations = () => {
  return (
    <div className="relative w-full h-screen bg-[#0B2447] flex flex-col justify-center items-center text-white px-8 py-16">
      
      {/* ✅ Title Section */}
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
        <span className="block"><span className="text-white">STRATEGIC</span></span>
        <span className="block"><span className="text-[#F8B400]">RECOMMENDATIONS</span></span>
      </h2>

      {/* ✅ Content Section */}
      <div className="max-w-5xl text-center text-lg md:text-xl mb-12">
        <p className="mb-4">
          <span>
            In conclusion, <span className="font-bold text-[#F8B400]">Voco Hotel Panchkula</span> stands as a key hospitality destination for 
            <span className="text-[#F8B400]"> business</span>, 
            <span className="text-[#F8B400]"> leisure</span>, and 
            <span className="text-[#F8B400]"> event travelers</span>. By implementing targeted marketing strategies, leveraging 
            event-based revenues, and enhancing F&B experiences, the hotel can optimize its offerings to attract high-value 
            customers and boost revenue.
          </span>
        </p>
        <p>
          <span>
            With a <span className="text-[#F8B400] font-bold">robust tourism growth trajectory</span> and increasing demand for 
            <span className="text-[#F8B400]"> luxury & event spaces</span>, this is the ideal moment to 
            <span className="text-[#F8B400]"> elevate Voco Hotel Panchkula’s brand positioning</span> in the hospitality market.
          </span>
        </p>
      </div>

      {/* ✅ Image Section */}
      <div className="flex items-center justify-center space-x-6 md:space-x-12">
        {/* Image 1 */}
        <div className="border-4 border-white p-2 rounded-lg">
          <img src={roomImage} alt="Luxury Room" className="w-48 md:w-64 h-auto rounded-md" />
        </div>

        {/* Separator */}
        <span className="text-4xl md:text-5xl font-bold">—</span>

        {/* Image 2 */}
        <div className="border-4 border-white p-2 rounded-lg">
          <img src={keyCardImage} alt="Hotel Keycard" className="w-48 md:w-64 h-auto rounded-md" />
        </div>

        {/* Separator */}
        <span className="text-4xl md:text-5xl font-bold">—</span>

        {/* Image 3 */}
        <div className="border-4 border-white p-2 rounded-lg">
          <img src={resortImage} alt="Resort View" className="w-48 md:w-64 h-auto rounded-md" />
        </div>
      </div>

      {/* ✅ Page Number */}
      <div className="absolute bottom-6 right-6 bg-red-500 bg-opacity-50 text-white px-4 py-2 rounded-lg">
        <span className="text-2xl font-bold">08</span>
      </div>
    </div>
  );
};

export default StrategicRecommendations;
