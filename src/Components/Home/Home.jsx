import React from "react";
import Template from "../../Template/Template";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ToysGallery from "../ToysGallery/ToysGallery";
import GiftToys from "../GiftToys/GiftToys";
import CustomersReview from "../Customers/CustomersReview";

const Home = () => {
  return (
    <div>
      <Template />
      <ShopByCategory />
      <ToysGallery />
      <GiftToys />
      <CustomersReview />
    </div>
  );
};

export default Home;
