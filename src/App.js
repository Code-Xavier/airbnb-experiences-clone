import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./style.css";
import data from "./data";
// import Joke from "./components/Joke";


const cards = data.map(card => {
  return (
    <Card
      coverImg={card.coverImg}
      location={card.location}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      title={card.title}
      price={card.price}
    />
  );
});

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/*props can be any JS data type*/}
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;

