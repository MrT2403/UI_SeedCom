import React from "react";

const CategoryRow = () => {
  const categories = [
    { name: "Rau củ", imageUrl: "./assets/vegetable.png" },
    { name: "Thịt", imageUrl: "./assets/meat.png" },
    { name: "Sữa", imageUrl: "./assets/milk.png" },
    { name: "Thực phẩm đông lạnh", imageUrl: "./assets/cake.png" },
    { name: "Bánh kẹo", imageUrl: "./assets/cake.png" },
    { name: "Gia vị", imageUrl: "./assets/cake.png" },
    { name: "Đồ khô", imageUrl: "./assets/cake.png" },
    { name: "Trái cây", imageUrl: "./assets/cake.png" },
    { name: "Trái cây", imageUrl: "./assets/cake.png" },
    { name: "Trái cây", imageUrl: "./assets/cake.png" },
    { name: "Trái cây", imageUrl: "./assets/cake.png" },
    { name: "Trái cây", imageUrl: "./assets/cake.png" },
    { name: "Trái cây", imageUrl: "./assets/cake.png" },
    { name: "Trái cây", imageUrl: "./assets/cake.png" },
  ];

  return (
    <div className="flex overflow-x-auto mb-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[80px] text-center py-2 rounded  gap-[8px] "
          style={{ marginRight: index < categories.length - 1 ? "8px" : "0" }}
        >
          <img
            src={category.imageUrl || "./assets/meat.png"}
            alt={category.name}
            className="w-16 h-16 mx-auto bg-gray-300 rounded-full mb-2"
          />
          <p className="text-sm">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryRow;
