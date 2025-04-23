import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Contact, About, MyCart } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
    </>
  );
};

export default App;
