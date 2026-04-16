import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import CTA from "./components/sections/CTA";
import Supporters from "./components/sections/Supporters";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Products />
      <CTA />
      <Supporters />
      <Footer />
    </>
  );
}

export default App;