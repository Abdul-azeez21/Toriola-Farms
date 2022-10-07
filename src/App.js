import { Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Careers from "./Pages/Careers";
import Sustainability from "./Pages/Sustainability";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="careers" element={<Careers />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
