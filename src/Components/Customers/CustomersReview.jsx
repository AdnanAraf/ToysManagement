import React from "react";

const CustomersReview = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-[50px] mt-[50px] font-bold">
          Our Customer's <span className="">Review</span>
        </h1>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:m-[50px] grid grid-cols-1">
        <div className="lg:h-[400px] lg:w-[400px] shadow-lg">
          <img
            className="rounded-full h-[100px] w-[100px] m-auto"
            src="https://i.ibb.co/DM9psjr/images-q-tbn-ANd9-Gc-SABg-B75rju-APVFd-EWOb-Pov-Ixrm4rkpw-L3n-Tg-usqp-CAU.jpg"
          ></img>
          <h1 className="text-center mt-[20px] font-semibold text-[20px]">
            John Universe
          </h1>
          <p className="mt-[10px] lg:text-center">
            educational toys emphasize the impact the toy has on a child's
            learning and development. Reviews often highlight specific skills or
            concepts the toy helps to teach, such as problem-solving,
            creativity, fine motor skills, logical thinking, or language
            development.
          </p>
        </div>
        <div className="lg:h-[400px] lg:w-[400px] shadow-lg">
          <img
            className="rounded-full h-[100px] w-[100px] m-auto"
            src="https://i.ibb.co/tcS0bqC/images-q-tbn-ANd9-Gc-QKz-KECd95-KNy99uwb-Jj-RT6v6py-CJLZxrt-BQ-usqp-CAU.jpg"
          ></img>
          <h1 className="text-center mt-[20px] font-semibold text-[20px]">
            Morgan John
          </h1>
          <p className="mt-[10px] lg:text-center">
            Science toys emphasize the impact the toy has on a child's learning
            and development. Reviews often highlight specific skills or concepts
            the toy helps to teach, such as problem-solving, creativity, fine
            motor skills, logical thinking, or language development.
          </p>
        </div>
        <div className="lg:h-[400px] lg:w-[400px] shadow-lg">
          <img
            className="rounded-full h-[100px] w-[100px] m-auto"
            src="https://i.ibb.co/T09tysW/images-q-tbn-ANd9-Gc-Rq-J0dehnccng-Ij78-B9k-Wzqx-Pk-XAt-Rq-Wbj-LRQ-usqp-CAU.jpg"
          ></img>

          <h1 className="text-center mt-[20px] font-semibold text-[20px]">
            William
          </h1>
          <p className="mt-[10px] lg:text-center">
            Math toys emphasize the impact the toy has on a child's learning and
            development. Reviews often highlight specific skills or concepts the
            toy helps to teach, such as problem-solving, creativity, fine motor
            skills, logical thinking, or language development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomersReview;
