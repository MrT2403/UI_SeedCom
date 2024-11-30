import React from "react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)",
      price: "1.200.000 đ",
      originalPrice: "1.500.000 đ",
      discount: "-10%",
      image: "./assets/cake.png",
      origin: "Úc",
      saving: "Tiết kiệm 12k",
    },
    {
      id: 2,
      name: "Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)",
      price: "1.200.000 đ",
      originalPrice: "1.500.000 đ",
      discount: "-10%",
      image: "./assets/cake.png",
      origin: "Mỹ",
      saving: "Tiết kiệm 12k",
    },
    {
      id: 3,
      name: "Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)",
      price: "1.200.000 đ",
      originalPrice: "1.500.000 đ",
      discount: "-10%",
      image: "./assets/cake.png",
      origin: "Mỹ",
      saving: "Tiết kiệm 12k",
    },
    {
      id: 4,
      name: "Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)",
      price: "1.200.000 đ",
      originalPrice: "1.500.000 đ",
      discount: "-10%",
      image: "./assets/cake.png",
      origin: "Mỹ",
      saving: "Tiết kiệm 12k",
    },
    {
      id: 5,
      name: "Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)",
      price: "1.200.000 đ",
      originalPrice: "1.500.000 đ",
      discount: "-10%",
      image: "./assets/cake.png",
      origin: "Mỹ",
      saving: "Tiết kiệm 12k",
    },
    {
      id: 6,
      name: "Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)",
      price: "1.200.000 đ",
      originalPrice: "1.500.000 đ",
      discount: "-10%",
      image: "./assets/cake.png",
      origin: "Mỹ",
      saving: "Tiết kiệm 12k",
    },
    {
      id: 7,
      name: "Táo Mỹ & Nam Phi túi 1.5kg (1 Túi)",
      price: "1.200.000 đ",
      originalPrice: "1.500.000 đ",
      discount: "-10%",
      image: "./assets/cake.png",
      origin: "Mỹ",
      saving: "Tiết kiệm 12k",
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
            className="rounded-lg text-left relative"
            style={{ width: "164px", height: "300px" }}
          >
            <div className="bg-bgImg rounded-lg h-40 p-2 relative mb-1">
              <span className="absolute top-0 right-0 bg-bgDiscount text-black font-bold text-lg px-2 py-1 rounded-bl-lg">
                {product.discount}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="h-28 w-full object-cover"
              />
              <div className="flex items-center text-xs">
                <span className="bg-blue-100 text-blue-600 font-bold rounded-md mt-1 px-2 py-1 text-center">
                  Ưu đãi online
                </span>
                <span className="text-saving font-semibold pl-2 text-center">
                  {product.origin}
                </span>
              </div>
            </div>
            <p className="text-red-500 text-lg font-bold">{product.price}</p>
            <div className="flex gap-2 items-center mt-1 text-xs mb-4">
              <p className="line-through text-gray-500">
                {product.originalPrice}
              </p>
              <p className="text-green-600 font-bold">{product.saving}</p>
            </div>
            <h3 className="text-itemName text-sm font-normal">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
