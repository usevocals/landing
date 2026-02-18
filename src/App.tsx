import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Technology from "./components/Technology";
import Marquee from "./components/Marquee";
import Benchmark from "./components/Benchmark";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Technology />
      <Marquee />
      <Benchmark />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
