import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import "./App.css";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card
              img="mug-1.png"
              title="Nantahala"
              price={105.00}
              details="4.25 in tall by 4 in wide"
              rating={5}
      />
    </div>
  );
}

export default App;
