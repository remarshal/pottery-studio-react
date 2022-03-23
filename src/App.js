import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer"
import data from "./data";
import "./App.css";
import CallToAction from "./components/CallToAction";

function App() {
  const storeItem = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.img}
        title={item.title}
        price={item.price}
        details={item.details}
        rating={item.rating}
        sale={item.sale}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">{storeItem}</section>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
