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

function App() {
  return (
    <>
      <Navbar />
      <FlotingCartBtn />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
