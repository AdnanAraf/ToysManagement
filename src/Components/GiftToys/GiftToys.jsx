import React from "react";

const GiftToys = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-[50px]">Gift Toys</h1>
        <img
          className="lg:mx-[400px]  lg:w-[800px] lg:mt-[30px]"
          src="https://i.ibb.co/7Wvr4bD/toy-train.png"
        ></img>
      </div>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 mt-[70px] gap-[20px] overflow-hidden">
        <div className="lg:h-[500px] lg:w-[500px] shadow-lg bg-gradient-to-r from-green-500 to-blue-100">
          <img
            className="h-[300px] w-full"
            src="https://i.ibb.co/5GNpZ41/islamic-blessed-festival-eid-mubarak-celebrations-concept-with-many-gift-boxes-green-background-1302.jpg"
          ></img>
          <h1 className="text-center text-[40px] mt-[20px] font-bold">
            ° 🎀 𝐸𝒾𝒹 𝒢𝒾𝒻𝓉 🎀 °
          </h1>
        </div>
        <div className="lg:h-[500px] lg:w-[500px] shadow-lg  bg-gradient-to-r from-[#f5e4e1] to-[#483c3d]">
          <img
            className="h-[300px] w-full"
            src="https://i.ibb.co/XXDfpk8/festive-multicolor-gift-boxes-flat-illustration-575670-201.jpg"
          ></img>

          <h1 className="text-center text-[25px] mt-[20px] font-bold">
            🍑 ⋆ 🎂 🎀 𝐵𝒾𝓇𝓉𝒽𝒹𝒶𝓎 𝒢𝒾𝒻𝓉 🎀 🎂 ⋆ 🍑
          </h1>
        </div>
        <div className="lg:h-[500px] lg:w-[500px] shadow-lg bg-gradient-to-r from-[#ffffff] to-[#f25f5f]">
          <img
            className="h-[300px] w-full"
            src="https://i.ibb.co/zJrFdT4/christmas-toy-background-23-2147996481.jpg"
          ></img>
          <h1 className="text-center text-[25px] mt-[20px] font-bold">
            🎂 🎀 ℭ𝔯𝔦𝔰𝔱𝔐𝔞𝔰 𝔊𝔦𝔣𝔱 𝔱𝔬𝔶𝔰🎂 ⋆ 🍑
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GiftToys;
