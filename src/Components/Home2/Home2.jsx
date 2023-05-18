import React from "react";
import Template from "../../Template/Template";
import ToysGallery from "../ToysGallery/ToysGallery";
import GiftToys from "../GiftToys/GiftToys";

import CustomersReview from "../Customers/CustomersReview";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home2 = () => {
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

export default Home2;
