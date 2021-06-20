import React from "react";
import "./App.css";
import Banner from "./components/Banner/banner.component";
import CategoryCard from "./components/CategoryCard/categoryCard.component";
import Header from "./components/Header/header.component";
// import ProductCard from "./components/ProductCard/ProductCard.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <div className="categories__container">
        <CategoryCard
          imageUrl={
            "https://www.searchpng.com/wp-content/uploads/2019/01/Nike-Shoe-PNG-715x715.png"
          }
          category={"shoes"}
        />
        <CategoryCard
          imageUrl={"http://pngimg.com/uploads/laptop/laptop_PNG101762.png"}
          category={"laptops"}
        />
        <CategoryCard
          imageUrl={"https://freepngimg.com/thumb/book/37064-8-book-hd.png"}
          category={"shoes"}
        />

        <CategoryCard
          imageUrl={
            "http://pngimg.com/uploads/headphones/headphones_PNG101963.png"
          }
          category={"shoes"}
        />
        <CategoryCard
          imageUrl={
            "http://pngimg.com/uploads/refrigerator/refrigerator_PNG101538.png"
          }
          category={"laptops"}
        />
        <CategoryCard
          imageUrl={
            "https://www.searchpng.com/wp-content/uploads/2019/01/Nike-Shoe-PNG-715x715.png"
          }
          category={"shoes"}
        />
        <CategoryCard
          imageUrl={"http://pngimg.com/uploads/laptop/laptop_PNG101762.png"}
          category={"laptops"}
        />
        <CategoryCard
          imageUrl={
            "https://www.searchpng.com/wp-content/uploads/2019/01/Nike-Shoe-PNG-715x715.png"
          }
          category={"shoes"}
        />
        <CategoryCard
          imageUrl={
            "https://toppng.com/uploads/preview/microphone-transparent-background-png-recording-studio-mic-115632436336lx3xzdxwn.png"
          }
          category={"laptops"}
        />
      </div>
      {/* <div className="productCard__container">
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
      </div> */}
    </div>
  );
}

export default App;
