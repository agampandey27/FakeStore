import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/api.js";
import { Card } from "../components";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await getAllProducts();
      // console.log(res.data)
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
    <h1 className="p-4 text-2xl text-center font-semibold">
      <Typewriter
        words={["Welcome, To FakeStore! A dummy E-com website"]}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        delaySpeed={1000}
      />
    </h1>
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
      {products.map((e) => {
        return (
          <Link key={e.id} to={`/product/${e.id}`}>
          <Card image={e.image} title={e.title} price={e.price} rate={e.rating.rate} />
          </Link>
        );
      })}
    </div>
    </>
  );
};

export default Home;
