import React from "react";
import "./App.css";
import HomePageCard from "./components/homepagecard";
import Navbar from "./components/Navbar";

const homepageItems = [
  {
    id: 1,
    title: "SHOP",
    description: "PAST",
    image: "../public/past.webp",
  },
  {
    id: 2,
    title: "SHOP",
    description: "PRESENT",
    image: "../public/present.jpg",
  },
  {
    id: 3,
    title: "SHOP",
    description: "FUTURE",
    image: "../public/future.jpg",
  },
];

const App = () => {
  return (
    <>
      <Navbar />

      <div className="app">
        <div className="homepage-row">
          {homepageItems.map((item) => (
            <HomePageCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
