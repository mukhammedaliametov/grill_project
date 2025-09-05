import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { PiCalculatorFill } from "react-icons/pi";
import Background from "../assets/hero_bg.jpg";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="w-full h-[60vh] lg:h-[100vh] bg-cover bg-center pt-[60%] sm:pt-[45%] md:pt-[30%] lg:pt-[20%]"
    >
      <div className="bg-[#120c0560] absolute top-0 left-0 w-full h-[100vh] z-10"></div>
      <div className="container relative mx-auto px-[16px] text-primary-white z-20 h-full">
        <div>
          <h1 className="text-[46px]/[39px] lg:text-[64px]/[62px] font-comfortaa font-black">
            Премиальные <br /> гриль-кухни
          </h1>
          <p className="font-montserrat text-[16px] md:text-[18px] mt-[20px]">
            Проектирование. Изготовление. Установка.
          </p>
        </div>
        <div className="hidden md:block absolute right-0 bottom-0 mb-[15px] pr-[20px]">
          <a
            href=""
            className="p-[12px] lg:p-[14px] text-[20px] bg-primary-red rounded-full cursor-pointer block hover:bg-red-700 duration-300"
          >
            <FaPhoneAlt />
          </a>
          <a
            href=""
            className="p-[12px] lg:p-[14px] text-[20px] bg-primary-red rounded-full cursor-pointer block my-[15px] hover:bg-red-700 duration-300"
          >
            <PiCalculatorFill />
          </a>
          <div className="p-[12px] text-[20px] border border-primary-white rounded-full cursor-pointer ">
            <FaArrowDownLong />
          </div>
        </div>
        <div className="bg-primary-red flex items-center absolute bottom-0 rounded-[10px] lg:rounded-[20px] overflow-hidden left-[21.5%] md:left-[40%] xl:left-[30%] 2xl:left-[30%] mb-[-30px] cursor-pointer">
          <a
            href="#"
            className="py-[15px] lg:py-[20px] px-[20px] lg:px-[22px] 2xl:px-[32px] font-[500] font-montserrat flex items-center gap-[10px] hover:bg-red-700 duration-300"
          >
            <FaPhoneAlt className="text-[24px]" /> <p className="hidden lg:block">Заказать звонок</p> 
          </a>
          <a
            href="#"
            className="py-[15px] lg:py-[20px] px-[20px] lg:px-[22px] 2xl:px-[32px] font-[500] font-montserrat flex items-center gap-[10px] hover:bg-red-700 duration-300"
          >
            <FaTelegramPlane className="text-[24px]" /> <p className="hidden lg:block">Telegram</p> 
          </a>
          <a
            href="#"
            className="py-[15px] lg:py-[20px] px-[20px] lg:px-[22px] 2xl:px-[32px] font-[500] font-montserrat flex items-center gap-[10px] hover:bg-red-700 duration-300"
          >
            <IoLogoWhatsapp className="text-[24px]" /> <p className="hidden lg:block">Whatsapp</p> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
