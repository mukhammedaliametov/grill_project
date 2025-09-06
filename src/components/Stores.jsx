import React from "react";
import Store1 from '../assets/store1.png';
import Store2 from '../assets/store2.png';
import Store3 from '../assets/store3.png';

const stores = [
  {
    id: 1,
    city: "Москва",
    address: "Калужское шоссе, поселение Сосенское, ул. Сосновская 3Б",
    image: Store1,
  },
  {
    id: 2,
    city: "Москва",
    address: "Калужское шоссе, поселение Десеновское, деревня Десна, ул. Рябиновая 15",
    image: Store2,
  },
  {
    id: 3,
    city: "Санкт-Петербург",
    address: "Межевой канал 5 АХ",
    image: Store3,
  },
];

const Stores = () => {
  return (
      <div className="container mx-auto px-[16px]">
        <h2 className="text-primary-black font-jost text-3xl md:text-4xl font-bold text-center mb-10">
          Наши магазины
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start font-montserrat">
          {stores.map((store) => (
            <div
              key={store.id}
              className="p-4 flex flex-col w-full md:w-1/3"
            >
              <img
                src={store.image}
                alt={store.city}
                className="w-full h-[200px] object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold text-[21px]">{store.city}</h3>
              <p className="text-gray-600 text-[18px] mt-2">{store.address}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Stores;
