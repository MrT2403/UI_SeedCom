import React from "react";

interface MenuItem {
  img: string;
  text: string;
}

const SideBar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { img: "vegetable.png", text: "Rau, củ, quả" },
    { img: "meat.png", text: "Thịt, cá, trứng, hải sản" },
    { img: "milk.png", text: "Sữa, bơ, phô mai" },
    { img: "cake.png", text: "Thực phẩm đông lạnh" },
    { img: "cake.png", text: "Thực phẩm đông lạnh" },
    { img: "cake.png", text: "Thực phẩm đông lạnh" },
    { img: "cake.png", text: "Thực phẩm đông lạnh" },
    { img: "cake.png", text: "Thực phẩm đông lạnh" },
  ];

  return (
    <aside className="bg-white ">
      <ul className="space-y-4 pt-2 pr-2">
        {menuItems.map((item) => (
          <li
            key={item.text}
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
