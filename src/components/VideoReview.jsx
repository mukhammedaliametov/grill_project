import React from "react";
import ImagePrevyu from "../assets/prevyu.png";
import { IoMdPlay } from "react-icons/io";

const VideoReview = () => {
  return (
    <div className="container mx-auto px-[16px]">
      <h2 className="text-primary-black text-[36px] lg:text-[44px] font-bold text-center font-jost mt-[80px] mb-[40px]">
        Видеообзор
      </h2>
      <div className="w-[90%] mx-auto relative flex items-center justify-center">
        <img src={ImagePrevyu} alt="image" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="bg-[#ffffffbd] text-primary-red text-[26px] lg:text-[36px] p-[12px] lg:p-[18px] rounded-full cursor-pointer"
            onClick={() => alert("100 ball qoymaganizcha video ochmaydi :)")}
          >
            <IoMdPlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoReview;
