import React from "react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Nho Úc",
      price: "1.200.000 đ",
      image: "./assets/cake.png",
    },
    {
      id: 2,
      name: "Nho Úc",
      price: "1.500.000 đ",
      image: "./assets/cake.png",
    },
    {
      id: 3,
      name: "Nho Úc",
      price: "1.500.000 đ",
      image: "./assets/cake.png",
    },
    {
      id: 4,
      name: "Nho Úc",
      price: "1.200.000 đ",
      image: "./assets/cake.png",
    },
    {
      id: 5,
      name: "Nho Úc",
      price: "1.200.000 đ",
      image: "./assets/cake.png",
    },
    {
      id: 6,
      name: "Nho Úc",
      price: "1.200.000 đ",
      image: "./assets/cake.png",
    },
    {
      id: 7,
      name: "Nho Úc",
      price: "1.200.000 đ",
      image: "./assets/cake.png",
    },
  ];

  return (
    <div>
      <div className="bg-green-100 p-4 rounded mb-4">
        <h2 className="font-bold text-lg">Rau Củ Quả</h2>
        <p className="text-green-700">Hàng mới về - bán trong ngày</p>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg text-center "
            style={{ width: "164px", height: "256px" }}
          >
            <div className="h-32 mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-sm font-bold">{product.name}</h3>
            <p className="text-red-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
