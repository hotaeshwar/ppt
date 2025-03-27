import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import hotelBgImage from "/src/assets/images/hotel-room-bg.jpg"; // Ensure the image path is correct

const ThankYouSlide = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full Page Background Image */}
      <img
        src={hotelBgImage}
        alt="Hotel Room"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003366]/80"></div>

      {/* Animated Text Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          className="text-7xl font-extrabold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="text-white"
            animate={{
              textShadow: [
                "0px 0px 5px rgba(255,255,255,0.3)", 
                "0px 0px 20px rgba(255,255,255,0.6)", 
                "0px 0px 40px rgba(255,255,255,0.8)", 
                "0px 0px 20px rgba(255,255,255,0.6)", 
                "0px 0px 5px rgba(255,255,255,0.3)"
              ],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            THANK{" "}
          </motion.span>
          <motion.span
            className="text-[#F8B400]"
            animate={{
              textShadow: [
                "0px 0px 5px rgba(248,180,0,0.3)", 
                "0px 0px 20px rgba(248,180,0,0.6)", 
                "0px 0px 40px rgba(248,180,0,0.8)", 
                "0px 0px 20px rgba(248,180,0,0.6)", 
                "0px 0px 5px rgba(248,180,0,0.3)"
              ],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            YOU
          </motion.span>
        </motion.h1>
      </div>

      {/* Animated Page Number */}
      <motion.div
        className="absolute bottom-4 right-4 text-white text-lg font-semibold bg-[#F8B400]/80 rounded-full px-4 py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        14
      </motion.div>
    </div>
  );
};

export default ThankYouSlide;
