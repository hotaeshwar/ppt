import React from 'react';
import { BriefcaseIcon, UserGroupIcon, SparklesIcon, CalendarIcon } from '@heroicons/react/24/solid';

const StrategicLocationSlide = () => {
  return (
    <div className="relative w-full h-screen bg-white flex items-center overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full flex">
        <div className="w-2/3"></div>
        <div className="w-1/3 bg-[#0B2447] text-white p-12 flex flex-col justify-center z-10 shadow-2xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="block text-blue-300">STRATEGIC</span>
            <span className="block text-white">LOCATION &</span>
            <span className="block text-blue-200">AUDIENCE</span>
          </h2>
          
          <p className="text-base md:text-lg mb-6 opacity-80 animate-fade-in delay-200">
            <span className="bg-blue-900 bg-opacity-30 px-2 py-1 rounded">
              Positioned strategically along the Manali-Delhi Highway, 
            </span>
            <span className="block mt-2 text-gray-300">
              attracting business travelers, leisure tourists, and event-goers.
            </span>
          </p>
          
          <div className="animate-fade-in delay-400">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="border-b-2 border-yellow-400 pb-1">Target Groups:</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group">
                <BriefcaseIcon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-600 transition-colors" />
                <span className="group-hover:text-yellow-200 transition-colors">
                  Corporate executives
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <UserGroupIcon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-600 transition-colors" />
                <span className="group-hover:text-yellow-200 transition-colors">
                  Families
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <SparklesIcon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-600 transition-colors" />
                <span className="group-hover:text-yellow-200 transition-colors">
                  Luxury seekers
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <CalendarIcon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-600 transition-colors" />
                <span className="group-hover:text-yellow-200 transition-colors">
                  Social event organizers
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-12 w-2/3">
        <div className="flex space-x-[-4rem]">
          <div className="w-[55%] shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-2 origin-bottom-right animate-slide-in-left z-10">
            <img 
              src="/src/assets/images/business1.png" 
              alt="Business Image 1" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="w-[55%] shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-2 origin-bottom-left animate-slide-in-right">
            <img 
              src="/src/assets/images/business2.jpeg" 
              alt="Business Image 2" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Page Number */}
      <div className="absolute bottom-6 right-6 bg-red-500 bg-opacity-50 text-white px-4 py-2 rounded-lg z-20">
        <span className="text-2xl font-bold">03</span>
      </div>
      
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default StrategicLocationSlide;
