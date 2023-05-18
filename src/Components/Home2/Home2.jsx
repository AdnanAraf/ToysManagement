import React from "react";
import Template from "../../Template/Template";
import ToysGallery from "../ToysGallery/ToysGallery";
import GiftToys from "../../Template/GiftToys/GiftToys";

import CustomersReview from "../Customers/CustomersReview";

const Home2 = () => {
  return (
    <div>
      <Template />
      <ToysGallery />
      <GiftToys />
      <CustomersReview />
    </div>
  );
};

export default Home2;
