import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
    
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  const navItems = [
    { name: "Состав работ", link: "#" },
    { name: "Рассчитать", link: "#" },
    { name: "Наши работы", link: "#" },
    { name: "Видеообзор", link: "#" },
    { name: "Отзывы", link: "#" },
  ];

  return (
    <div className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-[20px] px-[16px] lg:px-0 font-montserrat font-medium">
        <div className="flex lg:hidden items-center gap-[10px]">
          <FiMenu size={24} onClick={handleClick} />{" "}
          <p className="hidden sm:block text-[14px]">Все разделы</p>
        </div>
        <nav className="hidden lg:flex gap-[25px]">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-primary-black hover:text-black duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-[15px] lg:gap-[25px]">
          <a
            href="tel: +7 333 333 33 33"
            className="text-primary-black hover:text-black duration-300 text-[14px] md:text-[16px]"
          >
            +7 333 333 33 33
          </a>
          <button className="hidden md:block bg-primary-red py-[12px] px-[32px] rounded-[43px] text-white cursor-pointer border-2 border-primary-red hover:bg-transparent duration-300 hover:text-primary-red">
            Заказать звонок
          </button>
          <a
            href="tel: +7 333 333 33 33"
            className="inline-block md:hidden bg-primary-red p-[12px] rounded-full text-white"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="#"
            className="inline-block lg:hidden bg-primary-red p-[12px] rounded-full text-white"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            href="#"
            className="hidden md:inline-block lg:hidden bg-primary-red p-[12px] rounded-full text-white"
          >
            <FaTelegramPlane />
          </a>
        </div>
        <nav className={`absolute top-0 bg-white shadow-md flex lg:hidden flex-col w-full py-[30px] px-[25px] transition-all duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`}>
          <div className="absolute top-0 right-0 m-[25px]">
            <IoClose className="text-[24px] text-primary-black" onClick={handleClick} />
          </div>
          <div className="mb-[45px]"></div>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={handleClick}
              className="text-primary-black hover:text-black duration-300 border-b border-[#00000041] pb-[15px] mb-[15px] first:mt-[150px] last:border-none last:py-0"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
