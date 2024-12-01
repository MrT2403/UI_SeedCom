import React from "react";
import SideBar from "./components/SideBar.tsx";
import Carousel from "./components/Carousel.tsx";
import CategoryRow from "./components/CategoryRow.tsx";
import ProductGrid from "./components/ProductGrid.tsx";
import Header from "./components/Header.tsx";

const App: React.FC = () => {
  return (
    <div className="w-[1440px] mx-auto min-h-screen">
      <Header />
      <div className="h-[0.5px] bg-gray-300" />
      <div className="flex">
        <SideBar />
        <main className="flex-1 p-6 border-l border-gray-300 h-full">
          <Carousel />
          <CategoryRow />
          <ProductGrid />
        </main>
      </div>
    </div>
  );
};

export default App;
