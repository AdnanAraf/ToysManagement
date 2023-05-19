import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToysDetails = () => {
  const Detailsdata = useLoaderData();
  console.log(Detailsdata);
  const {
    SellerName,
    Toyname,
    details,
    email,
    photo,
    price,
    quantity,
    rating,
  } = Detailsdata;
  return (
    <div className="bg-gradient-to-r via-orange-200 from-blue-100 to-green-100  w-full h-full">
      <div className=" ">
        <div>
          <img className="h-[500px] w-[500px] m-auto" src={photo}></img>
        </div>
        <div className=" text-center">
          {/**************************** Seller and Toys name **************************************************/}
          <div className="">
            <h1 className="">
              <span className="text-[20px]">SellerName : </span>
              {SellerName}
            </h1>
            <h1 className="">
              <span className="text-[20px] ">Toy'sName : </span>
              {Toyname}
            </h1>
          </div>
          {/*********************************** Seller Email and Price *******************************************/}
          <div className="">
            <h1 className="">
              <span className="text-[20px] ">SellerEmail: </span>
              {email}
            </h1>
            <h1 className="">
              <span className="text-[20px] ">Price: </span>
              {price}
            </h1>
          </div>
          {/******************************* Quantity and Rating**********************************************/}
          <div className=" ">
            <h1 className="">
              <span className="text-[20px] ">Quantity: </span>
              {quantity}
            </h1>
            <h1 className="">
              <span className="text-[20px] ">Rating: </span>
              {rating}
            </h1>
          </div>
        </div>
        <h1 className="text-center mt-[20px]">
          <span className="text-[20px] ">Details Description:</span>
          {details}
        </h1>
      </div>
    </div>
  );
};

export default SingleToysDetails;
