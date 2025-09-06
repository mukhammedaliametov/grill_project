import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import CardImg1 from "../assets/advantages_card1.png";
import CardImg2 from "../assets/advantages_card2.png";
import CardImg3 from "../assets/advantages_card3.png";
import { HiArrowLongRight } from "react-icons/hi2";

const Advantages = () => {
  const advantagesItems = [
    {
      title: "Открытые и закрытые зоны",
      info: "Гриль-кухни можно устанавливать на открытых и закрытых площадках",
    },
    {
      title: "Выбор конфигурации",
      info: "Проектируем и изготавливаем кухни любой геометрической формы",
    },
    {
      title: "Встроенная бытовая техника",
      info: "Подготавливаем модули под любую встроенную технику",
    },
  ];
  const advantagesCards = [
    {
      img: CardImg1,
      title: "Удобная конфигурация",
      info: "Подберем оптимальную форму гриль-кухни, размер и наполнение каждого модуля под ваши цели и задачи",
    },
    {
      img: CardImg2,
      title: "Вcтроенная техника",
      info: "Подготовим модули и аккуратно встроим бытовую технику, мойку, газовый и керамический гриль.",
    },
    {
      img: CardImg3,
      title: "Выбор материалов",
      info: "Вы можете выбрать материал, цвет и текстуру фасада, и столешницы.",
    },
  ];
  return (
    <div className="container mx-auto px-[16px]">
      <h2 className="text-primary-black text-[36px] lg:text-[44px] font-bold text-center font-jost mt-[80px]">Преимущества</h2>
      <div className="flex flex-col md:flex-row items-top gap-[20px] bg-transparent lg:bg-white rounded-[20px] lg:shadow-md lg:px-[50px] py-[30px] font-montserrat my-[30px] lg:my-[80px] mx-0 lg:mx-[80px]">
        {advantagesItems.map((item, index) => (
          <div key={index} className="bg-white lg:bg-transparent shadow-md lg:shadow-none p-[20px] lg:p-0 rounded-[12px]">
            <IoCheckmarkCircleOutline className="text-[36px] text-primary-black" />
            <h4 className='my-[8px] text-[16px] lg:text-[18px] font-semibold w-[90%] text-primary-black'>{item.title}</h4>
            <p className="text-dark-gray w-[90%] lg:w-[70%] text-[14px] lg:text-[16px]">{item.info}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[20px] md:gap-0 md:flex-row justify-between items-top mx-0 lg:mx-[100px] font-montserrat">
        {advantagesCards.map((item, index) => (
          <div key={index} className="group w-full sm:w-[230px] lg:w-[306px] ">
            <div className="overflow-hidden rounded-[20px] w-full">
            <img src={item.img} alt={item.title} className="w-full group-hover:scale-105 cursor-pointer duration-300" />
            </div>
            <h4 className="text-primary-black font-[600] text-[16px] lg:text-[20px] my-[10px] lg:my-[20px] cursor-pointer">{item.title}</h4>
            <p className="text-dark-gray text-[14px] lg:text-[16px]">{item.info}</p>
            <a href="#" className="inline-flex items-center gap-[10px] my-[10px] text-primary-red font-[500] text-[14px] lg:text-[16px]">
              Подробнее <HiArrowLongRight className="text-[32px] ml-0 group-hover:ml-[15px] transition-all duration-300" />
            </a>
          </div>
        ))}
      </div>
      <button className="w-full md:w-auto block py-[8px] lg:py-[12px] px-[54px] lg:px-[32px] rounded-[43px] cursor-pointer mx-auto my-[20px] lg:my-[40px] border-2 border-primary-red duration-300 text-primary-white lg:text-primary-red font-montserrat bg-primary-red lg:bg-transparent hover:bg-primary-red hover:text-primary-white">
        Заказать звонок
      </button>
    </div>
  );
};

export default Advantages;
