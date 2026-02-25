import Carousel from "./Carousel";
import HomePageCard from "./Homepagecard";
import { Link } from "react-router-dom";

export default function Homepage(props) {
  const homepageItems = [
    {
      id: 1,
      title: "SHOP PAST",
      image: "/past.jpg",
    },
    {
      id: 2,
      title: "SHOP PRESENT",
      image: "/present.jpg",
    },
    {
      id: 3,
      title: "SHOP FUTURE",
      image: "/future.jpg",
    },
  ]

    return (
      <div className="app">
        <div className="homepage-row">
          {homepageItems.map((item) => (
           <Link 
              key={item.id} 
              to={`/product?filter=${item.title.split(' ')[1].toLowerCase()}`} 
              style={{ textDecoration: 'none', color: 'inherit' }}> 
              <HomePageCard
              key={item.id}
              image={item.image}
              title={item.title}
              />
          </Link>
          ))}
        </div>
        
        <Carousel ></Carousel>
      </div>
    );
}

//testing comment
