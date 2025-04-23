import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Contact, About, MyCart } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-cart" element={<MyCart />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
