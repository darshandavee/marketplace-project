import HomePageCard from "./Homepagecard";

export default function Homepage(props) {
  const homepageItems = [
    {
      id: 1,
      title: "PAST",
      description: "PAST",
      image: "../public/past.webp",
    },
    {
      id: 2,
      title: "PRESENT",
      description: "PRESENT",
      image: "../public/present.jpg",
    },
    {
      id: 3,
      title: "FUTURE",
      description: "FUTURE",
      image: "../public/future.jpg",
    },
  ]

    return (
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
    );
}
