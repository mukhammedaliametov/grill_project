import React from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2b2f33] text-white py-10 font-montserrat">
      <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Навигация по сайту</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Преимущества</li>
            <li>Состав работ</li>
            <li>Предварительный расчет</li>
            <li>Наши работы</li>
            <li>Ответы на вопросы</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Магазины</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              Москва, Калужское шоссе, поселение Сосенское, ул. Сосновская 35
            </li>
            <li>
              Москва, Калужское шоссе, поселение Десеновское, деревня Десна,
              ул. Рябиновая 15
            </li>
            <li>Санкт-Петербург, Межевой канал 5 АХ</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold">+7 333 333 33 33</p>
          <button className="bg-primary-red px-4 py-2 rounded-lg font-medium hover:bg-red-800 transition">
            Заказать звонок
          </button>
          <div className="flex gap-4 text-gray-300">
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <FaTelegramPlane /> Telegram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <FaWhatsapp /> Whatsapp
            </a>
          </div>
        </div>

        <div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Политика конфиденциальности</li>
            <li>Пользовательское соглашение</li>
            <li>Публичная оферта</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
