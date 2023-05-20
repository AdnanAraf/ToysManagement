import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-blue-500">
      <div className="lg:flex justify-evenly">
        <div className="flex justify-between">
          <div className="">
            <img
              className="h-[150px] w-[150px]"
              src="https://i.ibb.co/nQphNNR/attachment-87333666-removebg-preview.png"
            ></img>
          </div>
          <div className="m-[30px]">
            <h1 className="lg:text-[30px] text-[20px] font-bold lg:font-normal">
              ToyMasterClass
            </h1>
          </div>
        </div>
        <div className="lg:m-[20px] lg:mx-[100px] ">
          <Link className="p-[20px]" to="/home">
            Home
          </Link>
          <Link className="p-[20px]" to="/All Toys">
            All Toys
          </Link>

          <Link className="p-[20px]" to="/Add a Toy">
            Add a Toy
          </Link>

          {user?.email ? (
            <>
              <Link className="lg:p-[20px]" to="/My Toys">
                My Toys
              </Link>
              <div className="tooltip lg:mt-[30px]" data-tip={user?.email}>
                {/* <button className="btn">Hover me</button> */}
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-success ml-[20px]"
              >
                Logout
              </button>
            </>
          ) : (
            <Link className="p-[20px]" to="/login">
              <button className="btn btn-success">Login</button>
            </Link>
          )}

          <Link className="p-[20px]" to="/Blog">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
