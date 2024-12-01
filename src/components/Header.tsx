import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 flex items-center bg-white gap-4">
      <div className="flex items-center gap-2">
        <img src="./assets/symbol.png" alt="Logo" className="w-8 h-8" />
        <h1 className="font-bold text-xl">OneLife</h1>
      </div>
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Tìm sản phẩm"
          className="w-full h-10 pl-10 pr-4 rounded-full border bg-search border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <img
          src="./assets/search.png"
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
      <div className="text-gray-600 text-sm mr-6">Tạp chí</div>
    </header>
  );
};

export default Header;
