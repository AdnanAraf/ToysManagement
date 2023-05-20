import React from "react";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-center ">
        <div>
          <img
            className="h-[120px] w-[120px]"
            src="https://i.ibb.co/nQphNNR/attachment-87333666-removebg-preview.png"
          ></img>
        </div>
        <div>
          <h1 className="text-white mt-[10px] font-bold text-[40px]">
            𝔗𝔬𝔶𝔐𝔞𝔰𝔱𝔢𝔯ℭ𝔩𝔞𝔰𝔰
          </h1>
        </div>
      </div>
      <div>
        <div className="flex justify-evenly">
          <div>
            <h1 className="text-white text-[25px] font-bold">Contact info</h1>
            <p className="font-semibold text-yellow-300">+73634982739</p>
            <p className="font-semibold text-yellow-300">
              arafadnan10@gmail.com
            </p>
          </div>
          <div>
            <h1 className="text-white text-[25px] font-bold">Address</h1>
            <p className="font-semibold text-yellow-300">
              143 Williamson Plaza,MT 09514
            </p>
          </div>

          <div className="flex ">
            <Link to="https://www.facebook.com/">
              <FaFacebook className="lg:h-[50px] lg:w-[50px] h-[100px] w-[100px] m-[20px]  text-blue-500 " />
            </Link>
            <Link to="https://www.youtube.com/">
              <FaYoutube className=" lg:h-[50px] lg:w-[50px] h-[100px] w-[100px] m-[20px] text-red-700" />
            </Link>

            <Link to="https://www.linkedin.com/in/adnan-araf-554483202/">
              <FaLinkedinIn className="lg:h-[50px] lg:w-[50px] h-[100px] w-[100px] m-[20px] text-[#0e76a8]" />
            </Link>
          </div>
        </div>
        <p className="text-center text-white mt-[50px]">
          Copyright © 2023 - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
