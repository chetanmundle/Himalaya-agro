import "./App.css";
import "./App1.css";
import "./App2.css";
import "./mobile1.css";
import "./tab1.css";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FlotingCartBtn from "./components/FlotingCartBtn";
import Test from "./Pages/Test";
import Footer from "./components/Footer";
import Gallery from "./Pages/Gallery";
import Achivements from "./Pages/Achivements";

function App() {
  return (
    <>
      <Navbar />
      <FlotingCartBtn />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Achivements" element={<Achivements /> } />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
