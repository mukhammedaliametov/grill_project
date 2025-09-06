import React from "react";
import Partner1 from "../assets/partner1.png";
import Partner2 from "../assets/partner2.png";
import Partner3 from "../assets/partner3.png";
import Partner4 from "../assets/partner4.png";
import Partner5 from "../assets/partner5.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Partners = () => {
  return (
    <div className="container mx-auto px-[16px] my-[110px]">
      <h2 className="text-primary-black text-[36px] lg:text-[44px] font-bold text-center font-jost mt-[80px] mb-[40px]">
        Наши работы
      </h2>
      <div className="flex items-center overflow-x-scroll lg:overflow-x-hidden gap-[20px]">
        <div className="text-[32px] hidden lg:block">
          <FaChevronLeft />
        </div>
        <img src={Partner1} alt="partner1" />
        <img src={Partner2} alt="partner2" />
        <img src={Partner3} alt="partner3" />
        <img src={Partner4} alt="partner4" />
        <img src={Partner5} alt="partner5" />
        <div className="text-[32px] hidden lg:block">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Partners;
