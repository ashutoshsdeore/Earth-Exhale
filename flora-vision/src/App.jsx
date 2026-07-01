import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import TopSelling from "./sections/TopSelling";
import Footer from "./components/Footer";

import "./App.css";
import CustomerReview from "./sections/CustomerReview"
import BestO2 from "./sections/BestO2";
function App() {
  return (
    <>
      <Navbar />

      <Hero />



       <TopSelling />
        <CustomerReview />
        <BestO2 />
      <Footer /> 
    </>
  );
}

export default App;