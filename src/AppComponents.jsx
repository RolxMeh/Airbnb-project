import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });

  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <div className="flex flex-row overflow-x-scroll">{cards}</div>
    </div>
  );
}
