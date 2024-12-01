import React from "react";

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1224px] h-[306px] bg-blue-300 rounded-lg mx-auto mb-6 p-4">
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button className="bg-black text-white w-[40px] h-[40px] rounded-full shadow flex items-center justify-center">
          {"<"}
        </button>
        <button className="bg-black text-white w-[40px] h-[40px] rounded-full shadow flex items-center justify-center">
          {">"}
        </button>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
        Banner Placeholder
      </div>
    </div>
  );
};

export default Carousel;
