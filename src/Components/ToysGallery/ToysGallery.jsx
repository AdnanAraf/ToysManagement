import React from "react";

const ToysGallery = () => {
  return (
    <div className="bg-blue-50">
      <div className=" h-[100px]">
        <h1 className="text-center text-[50px] font-bold ">Our Gallery</h1>
      </div>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-[20px] m-[50px] ">
        <img
          className="h-[400px] w-[400px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          src="https://i.ibb.co/wL8L5R9/hand-drawn-science-education-background-theme-23-2148510134.jpg"
        ></img>
        <img
          className="h-[400px] w-[400px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src="https://i.ibb.co/NyDSvKX/yellow-blue-toy-train-makeup-220664-3356.jpg"
        ></img>
        <img
          className="h-[400px] w-[400px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src="https://i.ibb.co/wc1VqmF/colorful-educational-toys-children-white-surface-168508-309.jpg"
        ></img>
        <img
          className="h-[400px] w-[400px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src="https://i.ibb.co/dWXLvvD/children-fixing-robot-together-1308-79723.jpg"
        ></img>
        <img
          className="h-[400px] w-[400px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src="https://i.ibb.co/Yk8Ct50/block-learning-seamless-background-1639-25598.jpg"
        ></img>
        <img
          className="h-[400px] w-[400px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src="https://i.ibb.co/rs9hMh8/home-made-robot-desk-23-2148863420.jpg"
        ></img>
        <img
          className="h-[400px] w-[400px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src="https://i.ibb.co/hMhRPP6/set-geometry-shapes-other-school-items-1308-40947.jpg"
        ></img>
        <img
          className="h-[400px] w-[400px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src="https://i.ibb.co/f187Bv1/hand-drawn-montessori-toys-illustration-23-2149578618.jpg"
        ></img>
        <img
          className="h-[400px] w-[400px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src="https://i.ibb.co/k2P0fcd/3d-illustration-children-s-toy-cubes-with-letters-23-2149345296.jpg"
        ></img>
      </div>
    </div>
  );
};

export default ToysGallery;
