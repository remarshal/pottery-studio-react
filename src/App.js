import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css";


function App() {
  const storeItem = data.map(item => {
    return (
      <Card
        img={item.img}
        title={item.title}
        price={item.price}
        details={item.details}
        rating={item.rating}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      {storeItem}
    </div>
  );
}

export default App;
