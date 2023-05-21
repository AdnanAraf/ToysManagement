import React from "react";
import { useLoaderData } from "react-router-dom";

const ShopCategoryDetails = () => {
  const shopData = useLoaderData();
  console.log(shopData);
  return (
    <div className="flex">
      <div>
        <img src="https://i.ibb.co/C8C9H1t/detailed-illustration-mathematical-place-value-abacus-1308-2489-removebg-preview.png"></img>
      </div>
      <div className="mt-[100px] ml-[200px]">
        <h1 className="text-[30px]">
          Catagory:<span className="font-bold">Math</span>
        </h1>
        <h1 className="text-[25px]">Number Blocks Set</h1>
        <p className="text-[20px]">Price:19.99</p>
        <p className="text-[20px]">Rating:4.5</p>
      </div>
    </div>
  );
};

export default ShopCategoryDetails;
