import React from "react";

const Template = () => {
  return (
    <div>
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="lg:flex bg-green-50 lg:justify-end lg:h-full lg:w-full h-full w-full ">
            <div className="lg:mt-[250px] lg:mx-[20px] mt-[100px]">
              <h1
                className="font-poppins font-bold lg:text-[40px] w-[700px] "
                data-aos="fade-down-right"
              >
                Super Amazing Science Toys for Children!
              </h1>
              <p
                className="font-title font-semibold lg:text-[20px] lg:mt-[20px] w-[600px] "
                data-aos="fade-down-right"
              >
                Science toys are educational tools designed to engage children
                and learners of all ages in the world of science through
                interactive play and exploration.
              </p>
            </div>
            <div>
              <img
                src="https://i.ibb.co/9q42tzm/science-retro-concept-set-with-cartoon-education-objects-1284-7500-removebg-preview.png"
                className="lg:w-[800px] lg:h-[600px] lg:mx-[100px] h-[200px] w-[200px] lg:mt[0px] mt-[100px] m-auto lg:m-[]"
              />
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/************************** SLIDER2************************************************************* */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="lg:flex bg-red-100 lg:justify-end lg:h-full lg:w-full h-full w-full">
            <div className="lg:mt-[250px] mx-[20px] mt-[100px]">
              <h1 className="font-poppins font-bold lg:text-[40px] w-[700px]">
                Super Amazing Engineering Toys for Children!
              </h1>
              <p className="font-title font-semibold lg:text-[20px] mt-[20px] w-[600px] ">
                Engineering toys are educational tools designed to engage
                children and learners of all ages in the world of science
                through interactive play and exploration.
              </p>
            </div>
            <div>
              <img
                src="https://i.ibb.co/JrJm5hJ/children-fixing-satellite-together-white-background-1308-78009-removebg-preview.png"
                className="lg:w-[800px] lg:h-[600px] lg:mx-[100px] h-[200px] w-[200px] lg:mt[0px] mt-[100px] m-auto lg:m-[]"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/************************** SLIDER3************************************************************* */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="lg:flex bg-yellow-50    lg:justify-end lg:h-full lg:w-full h-full w-full">
            <div className="lg:mt-[250px] mx-[20px] mt-[100px]">
              <h1 className="font-poppins font-bold lg:text-[40px] w-[700px]">
                Super Amazing Math Toys for Children!
              </h1>
              <p className="font-title font-semibold lg:text-[20px] mt-[20px] w-[600px] ">
                Math toys are educational tools designed to engage children and
                learners of all ages in the world of science through interactive
                play and exploration.
              </p>
            </div>
            <div>
              <img
                src="https://i.ibb.co/f187Bv1/hand-drawn-montessori-toys-illustration-23-2149578618.jpg"
                className="lg:w-[800px] lg:h-[600px] lg:mx-[100px] h-[200px] w-[200px] lg:mt[0px] mt-[100px] m-auto lg:m-[] "
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
