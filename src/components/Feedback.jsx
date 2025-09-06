import React from 'react';
import Image from '../assets/feedback.png';
import { HiArrowLongRight } from 'react-icons/hi2';

const Feedback = () => {
    const reviews = [
  {
    id: 1,
    name: "Дмитрий К.",
    text: "Отличная кухня, быстро договорились, произвели замеры и разработали проект! Отличная компания!",
    image: Image,
  },
  {
    id: 2,
    name: "Сергей В.",
    text: "Отличная кухня, быстро договорились, произвели замеры и разработали проект! Отличная компания!",
    image: Image,
  },
  {
    id: 3,
    name: "Андрей К.",
    text: "Отличная кухня, быстро договорились, произвели замеры и разработали проект! Отличная компания!",
    image: Image,
  },
];
    return (
      <div className="max-w-[1280px] mx-auto px-4 font-montserrat mt-[100px]">
        <h2 className="font-jost text-3xl md:text-4xl font-bold text-center mb-8 text-primary-black">
          Отзывы наших клиентов
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow p-4"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-full h-[200px] object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                {review.text}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary-red group transition-all duration-300"
              >
                Подробнее{" "}
                <HiArrowLongRight className="text-xl group-hover:ml-3 transition-all duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Feedback;