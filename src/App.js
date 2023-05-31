import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
