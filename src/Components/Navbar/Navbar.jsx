import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);
  const Enter = () => {
    setHover(true);
  };
  const Leave = () => {
    setHover(false);
  };

  console.log(user?.name);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-blue-500">
      <div className="flex justify-between">
        <div className="flex justify-between">
          <div className="">
            <img
              className="h-[150px] w-[150px]"
              src="https://i.ibb.co/nQphNNR/attachment-87333666-removebg-preview.png"
            ></img>
          </div>
          <div className="m-[30px]">
            <h1 className="text-[30px]">ToyMasterClass</h1>
          </div>
        </div>
        <div className="m-[20px] mx-[100px]">
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
              <Link className="p-[20px]" to="/My Toys">
                My Toys
              </Link>

              <Link className="p-[20px]" to="/login">
                <button className="btn btn-success">Logout</button>
              </Link>
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
