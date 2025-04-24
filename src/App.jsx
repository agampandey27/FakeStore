import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Contact, About, MyCart, ProductPage } from "./pages";
import { Navbar, Footer } from "./components";
import {ToastContainer} from 'react-toastify';

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
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      <ToastContainer/>
      </main>

      <Footer />
    </div>
  );
};

export default App;
