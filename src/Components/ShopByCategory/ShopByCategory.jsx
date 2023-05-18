import React, { useEffect, useState } from "react";
import SubcategoryCard from "../SubcategoryCard/SubcategoryCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ShopByCategory = () => {
  const [shopCategory, setShopCategory] = useState([]);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setShopCategory(data));
  }, []);

  return (
    <div className="bg-gradient-to-t via-yellow-300 from-blue-400    to-green-500 h-[700px]">
      <div>
        <h2 className="text-center font-bold text-[50px]">Shop by Category</h2>

        <Tabs>
          <TabList>
            {/* <Tab>Math Toys</Tab>
            <Tab>Language Toys</Tab>
            <Tab>Engineering Toys</Tab> */}
            {shopCategory.map((category) => (
              <Tab key={category.id}>
                <h1 className="text-center  text-[20px] cursor-pointer">
                  {category.category}
                </h1>
              </Tab>
            ))}
          </TabList>

          {shopCategory.map((category, index) => (
            <TabPanel key={index}>
              <div className="toy-container">
                <div className="toy-card">
                  <div className="flex justify-between">
                    <div>
                      <img
                        className="h-[300px] w-[600px]"
                        src={category.image}
                      />
                      <h4 className="text-center font-bold text-[25px]">
                        {category.name}
                      </h4>
                      <p className="text-center text-[18px]">
                        Price: ${category.price}
                      </p>
                      <p className="text-center text-[18px]">
                        Rating: {category.rating}
                      </p>
                      <button className="btn btn-success ml-[240px]">
                        View Details
                      </button>
                    </div>

                    <div>
                      <img
                        className="h-[300px] w-[600px]"
                        src={category.image2}
                      />
                      <h4 className="text-center font-bold text-[25px]">
                        {category.name2}
                      </h4>
                      <p className="text-center text-[18px]">
                        Price: ${category.price2}
                      </p>
                      <p className="text-center text-[18px]">
                        Rating: {category.rating2}
                      </p>
                      <button className="btn btn-success ml-[240px]">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
