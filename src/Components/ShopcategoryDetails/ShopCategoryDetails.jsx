import React from "react";
import { useLoaderData } from "react-router-dom";

const ShopCategoryDetails = () => {
  const shopData = useLoaderData();
  console.log(shopData);
  return (
    <div>
      <div>Hello world</div>
    </div>
  );
};

export default ShopCategoryDetails;
