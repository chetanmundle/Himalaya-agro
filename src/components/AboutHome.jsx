import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assets/aboutimg.jpg";

const AboutHome = () => {
  return (
    <div>
      <div className="abouthome-main-t">
        <div className="abouthome-main">
          <div className="abouthome-head">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <strong>ABOUT OUR ORGANIZATION</strong>
            </motion.h2>
          </div>
          <br />
          <div className="abouthome-data-head">
            <motion.div
              className="abouthome-imgdiv flex1"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={aboutimg} alt="" />
            </motion.div>
            <motion.div
              className="abouthome-data flex1"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p>
                <strong>Himalaya Agro Consultancy Services</strong> in Nagpur is
                one of the leading businesses in the
                <strong>Agricultural Consultants</strong>. Also known for
                Landscaping Development Watermelon Wholesalers, Drip Irrigation
                System Dealers, Irrigation Contractors, Agricultural
                Consultants, Plantation Services, Drip Irrigation System
                Dealers-Jain, Irrigation System Dealers, Banana,Mango,Orange
                Consultants and much more.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
