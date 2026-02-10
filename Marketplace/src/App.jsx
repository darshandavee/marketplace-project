import React from "react";
import "./App.css";
import HomePageCard from "./components/homepagecard";
import Navbar from "./components/Navbar";

const homepageItems = [
  {
    id: 1,
    title: "PAST",
    description: "PAST",
    image: "",
  },
  {
    id: 2,
    title: "PRESENT",
    description: "PRESENT",
    image: "",
  },
  {
    id: 3,
    title: "FUTURE",
    description: "FUTURE",
    image: "",
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
