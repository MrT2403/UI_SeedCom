import React from "react";

interface Category {
  name: string;
  imageUrl: string;
}

const CategoryRow: React.FC = () => {
  const categories: Category[] = [
    { name: "Rau củ", imageUrl: "./assets/vegetable.png" },
    { name: "Thịt", imageUrl: "./assets/meat.png" },
    { name: "Sữa", imageUrl: "./assets/milk.png" },
    { name: "Thực phẩm đông lạnh", imageUrl: "./assets/cake.png" },
    { name: "Thực phẩm đông lạnh", imageUrl: "./assets/cake.png" },
    { name: "Thực phẩm đông lạnh", imageUrl: "./assets/cake.png" },
    { name: "Thực phẩm đông lạnh", imageUrl: "./assets/cake.png" },
    { name: "Sữa", imageUrl: "./assets/milk.png" },
    { name: "Sữa", imageUrl: "./assets/milk.png" },
    { name: "Sữa", imageUrl: "./assets/milk.png" },
    { name: "Sữa", imageUrl: "./assets/milk.png" },
    { name: "Sữa", imageUrl: "./assets/milk.png" },
    { name: "Sữa", imageUrl: "./assets/milk.png" },
    { name: "Sữa", imageUrl: "./assets/milk.png" },
    { name: "Thực phẩm đông lạnh", imageUrl: "./assets/cake.png" },
  ];

  return (
    <div className="flex overflow-x-auto mb-6">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex-shrink-0 w-[80px] text-center py-2 rounded gap-[8px]"
        >
          <img
            src={category.imageUrl}
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
