import React from "react";

const Card = (props) => {
  return (
    <div className="break-inside-avoid mb-4 w-full bg-white text-[#111] rounded transform transition duration-300 hover:scale-95 active:scale-90 p-2">
      <img
        className="h-32 w-fit p-2 rounded mx-auto"
        src={props.image}
        alt=""
      />
      <h1 className="text-2xl text-[#111] font-semibold mb-2 text-center">
        {props.title}
      </h1>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Rating: {props.rate}/5</h1>
        <h1 className="font-bold text-right">Price: ${props.price}</h1>
      </div>
    </div>
  );
};

export default Card;
