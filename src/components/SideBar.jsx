import React from "react";

const SideBar = () => {
  const menuItems = [
    { img: "vegetable.png", text: "Rau, củ, quả" },
    { img: "meat.png", text: "Thịt, cá, trứng, hải sản" },
    { img: "milk.png", text: "Sữa, bơ, phô mai" },
    { img: "cake.png", text: "Thực phẩm đông lạnh" },
    { img: "cake.png", text: "Bánh kẹo, ngũ cốc ăn sáng" },
    { img: "oil.png", text: "Dầu ăn, nước chấm, gia vị" },
    { img: "cake.png", text: "Gạo, đậu, bột, đồ khô" },
  ];

  return (
    <aside className=" bg-white p-4">
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="w-[164px] h-[56px] flex items-center p-3 rounded-lg cursor-pointer hover:bg-customBlue transition-colors"
          >
            <img
              src={`./assets/${item.img}`}
              alt={item.text}
              className="w-10 h-10 mr-4"
            />
            <p className="text-sm font-medium">{item.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
