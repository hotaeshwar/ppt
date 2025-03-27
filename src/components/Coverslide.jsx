import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import background image & slides
import hotelBgImage from "/src/assets/images/hotel-room-bg.jpg";
import ExecutiveSummarySlide from './ExecutiveSummarySlide';
import StrategicLocationSlide from './StrategicLocationSlide';
import HospitalityMarketSlide from './HospitalityMarketSlide';
import EventBanquetMarket from './EventBanquetMarket';
import KeyBusinessOpportunities from './KeyBusinessOpportunities';
import StrategicRecommendationsSlide from "./StrategicRecommendationsSlide";
import StrategicRecommendations from "./StrategicRecommendations";
import TricityDemographics from "./TricityDemographics";
import TourismTrendsSlide from "./TourismTrendsSlide";
import CorporateBusinessTravelSlide from "./CorporateBusinessTravelSlide";
import CompetitiveLandscapeSlide from "./CompetitiveLandscapeSlide";
import ThankYouSlide from "./ThankYouSlide";
import Slidegrowth from "./Slidegrowth";

const CoverSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ 
        clickable: true,
        bulletActiveClass: 'bg-orange-500',
        bulletClass: 'w-3 h-3 rounded-full bg-white/50 mx-2 transition-all hover:bg-orange-400'
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      loop={true}
      className="h-screen w-full"
    >
      {/* ✅ Slide 1 - Cover Slide */}
      <SwiperSlide key="slide-1">
        <div className="relative h-screen w-full overflow-hidden">
          {/* Full Page Background Image */}
          <img 
            src={hotelBgImage} 
            alt="Hotel Room" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          {/* Text Content with Animation */}
          <div className="relative flex h-full">
            <div className="w-2/3"></div>
            <div className="w-1/3 bg-white/90 backdrop-blur-md shadow-2xl flex flex-col justify-center p-8 hover:scale-105 transition-all rounded-lg">
              <h1 className="text-4xl font-extrabold text-gray-800 leading-snug">
                <span className="block text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 drop-shadow-lg">
                  DEMOGRAPHIC
                </span>
                <span className="block text-gray-700 tracking-wider">
                  RESEARCH REPORT
                </span>
              </h1>
              <h3 className="text-5xl font-bold text-orange-500 drop-shadow-xl animate-pulse mt-4">
                <span className="text-gray-900">Voco</span> Hotel
              </h3>
              <p className="text-2xl text-gray-800 font-medium mt-2">
                <span className="text-orange-500 font-bold">Panchkula</span>, India
              </p>
              <p className="text-lg text-gray-600 mt-3 italic">
                "A comprehensive insight into the booming hospitality landscape."
              </p>
            </div>
          </div>
          
          {/* Page Number */}
          <div className="absolute bottom-4 right-4 text-white text-lg font-semibold bg-orange-500/80 rounded-full px-4 py-2">
            01
          </div>
        </div>
      </SwiperSlide>

      {/* ✅ Other Slides */}
      <SwiperSlide key="slide-2"><ExecutiveSummarySlide /></SwiperSlide>
      <SwiperSlide key="slide-3"><StrategicLocationSlide /></SwiperSlide>
      <SwiperSlide key="slide-4"><HospitalityMarketSlide /></SwiperSlide>
      <SwiperSlide key="slide-5"><EventBanquetMarket /></SwiperSlide>
      <SwiperSlide key="slide-6"><KeyBusinessOpportunities /></SwiperSlide>
      <SwiperSlide key="slide-7"><StrategicRecommendationsSlide /></SwiperSlide>
      <SwiperSlide key="slide-8"><StrategicRecommendations /></SwiperSlide>
      <SwiperSlide key="slide-9"><TricityDemographics /></SwiperSlide>
      <SwiperSlide key="slide-10"><TourismTrendsSlide /></SwiperSlide>
      <SwiperSlide key="slide-11"><CorporateBusinessTravelSlide /></SwiperSlide>
      <SwiperSlide key="slide-12"><CompetitiveLandscapeSlide /></SwiperSlide>
      <SwiperSlide key="slide-13"><Slidegrowth /></SwiperSlide>
      <SwiperSlide key="slide-14"><ThankYouSlide /></SwiperSlide>
    </Swiper>
  );
};

export default CoverSlide;
