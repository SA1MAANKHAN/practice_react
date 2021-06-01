import React from "react";
import "./App.css";
import Banner from "./components/Banner/banner.component";
import Header from "./components/Header/header.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
