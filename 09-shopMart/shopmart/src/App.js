import React from "react";
import "./App.css";
import Banner from "./components/Banner/banner.component";
import Header from "./components/Header/header.component";
import ProductCard from "./components/ProductCard/ProductCard.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <div className="productCard__container">
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
        <ProductCard
          name="Pizza"
          price="4.99"
          imageUrl="https://pngimg.com/uploads/pizza/pizza_PNG44084.png"
        />
      </div>
    </div>
  );
}

export default App;
