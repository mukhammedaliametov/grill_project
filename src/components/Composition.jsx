import React from "react";
import Image from "../assets/composition_img.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Composition = () => {
  return (
    <div className="container mx-auto px-[16px]">
      <h2 className="text-primary-black text-[36px] lg:text-[44px] font-bold text-center font-jost mt-[80px]">
        Состав работ
      </h2>
      <div className="flex flex-col md:flex-row items-top gap-[40px] font-montserrat mx-auto w-full lg:w-[80%] my-[50px]">
        <div className="flex flex-row md:flex-col gap-[10px] md:gap-[20px]">
          <p className="font-medium text-primary-red text-[14px] lg:text-[16px]">
            <span className="text-[14px] rounded-full py-[8px] px-[14px] bg-primary-red text-primary-white lg:mr-[8px] ml-[18px] md:ml-0">
              1
            </span>{" "}
            <span className="hidden md:inline-block ml-2">Выбор конфигурации</span>
          </p>
          <span className='block rotate-90 md:rotate-0 w-[2px] h-[20px] bg-primary-black ml-[15px]'></span>
          <p className="font-medium text-[14px] lg:text-[16px]">
            <span className="text-[14px] rounded-full py-[6px] px-[12px] border border-primary-black text-primary-black lg:mr-[8px] ml-[18px] md:ml-0">
              2
            </span>
            <span className="hidden md:inline-block ml-2">Выбор материала и цвета</span>
          </p>
          <span className='block rotate-90 md:rotate-0 w-[2px] h-[20px] bg-primary-black ml-[15px]'></span>
          <p className="font-medium text-[14px] lg:text-[16px]">
            <span className="text-[14px] rounded-full py-[6px] px-[12px] border border-primary-black text-primary-black lg:mr-[8px] ml-[18px] md:ml-0">
              3
            </span>
            <span className="hidden md:inline-block ml-2">Дизайн изготовление</span>
          </p>
          <span className='inline-block rotate-90 md:rotate-0 w-[2px] h-[20px] bg-primary-black ml-[15px]'></span>
          <p className="font-medium text-[14px] lg:text-[16px]">
            <span className="text-[14px] rounded-full py-[6px] px-[12px] border border-primary-black text-primary-black lg:mr-[8px] ml-[18px] md:ml-0">
              4
            </span>
            <span className="hidden md:inline-block ml-2">Установка</span>
          </p>
        </div>
        <div className="relative">
          <img src={Image} alt="img" className="w-[500px] lg:w-[615px] rounded-[20px] h-[400px]" />
          <div className="absolute m-[20px] md:m-0 top-0 right-0 rounded-[10px] h-[350px] md:w-[75%] md:h-full bg-[#373E4699] text-primary-white backdrop-blur-[4px] p-[20px] lg:p-[40px]">
            <h4 className="text-[20px] md:text-[28px] lg:text-[36px] font-jost font-medium">Выбор конфигурации</h4>
            <p className="mt-[10px]">
              На первом этапе работы мы помогаем определиться с формой кухни,
              количеством и наполнением каждого модуля. Предусматриваем блоки
              под установку грилей и встраиваемой бытовой техники.
            </p>
          </div>
          <FaChevronLeft className="hidden md:block absolute left-0 top-0 h-full text-[20px] lg:text-[30px] text-primary-white m-5" />
          <FaChevronRight className="hidden md:block absolute right-0 top-0 h-full text-[20px] lg:text-[30px] text-primary-white m-5" />
        </div>
      </div>
    </div>
  );
};

export default Composition;
