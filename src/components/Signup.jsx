import React from "react";
import GoogleButton from "react-google-button";
// import logo from "../../Assets/logo.svg";
import logo from "../Assets/logo.svg"
// import mainGirl from "../../Assets/mainGirl.png";
import mainGirl from "../Assets/mainGirl.png"

export default function Signup({ login }) {
  return (
    <div className=" flex w-screen h-screen 	">
      <div className=" w-2/5  hidden md:block  bg-orange-500">
        <div className=" mx-16 my-20">
          <img src={logo} alt="" className="" />
        </div>
        <div className=" absolute drop-shadow-[0_35px_20px_rgba(0,0,0,0.5)]  w-2/5 top-28 left-14  ">
          <img src={mainGirl} alt="" className=" " />
        </div>
      </div>
      <div className=" w-3/5 flex justify-center items-center ">
        <div className=" w-3/5 h-4/5 ">
          <div className="md:hidden mb-16 w-96 ">
            <img src={logo} alt="" className="" />
          </div>
          <h1 className="my-6 md:text-4xl text-lg font-bold ">
            Let's get started
          </h1>
          <div className="my-6">
            <p>
              <label htmlFor="fname">First Name</label>
            </p>
            <input
              type="text"
              id="fname"
              className="border-2 w-15 h-10 rounded-xl border-gray-400 outline-none"
            />
          </div>
          <div className="my-6">
            <p>
              <label htmlFor="lname">Last Name</label>
            </p>
            <div className="md:flex justify-between">
              <div>
                <input
                  type="text"
                  id="lname"
                  className="border-2 w-15 h-10 rounded-xl border-gray-400 outline-none"
                />
              </div>
              <p>OR</p>
              <div>
                <GoogleButton label="sign up with google " />
              </div>
            </div>
          </div>
          <div className="my-6">
            <p>
              <label htmlFor="email">Email</label>
            </p>
            <input
              type="text"
              id="email"
              className="border-2 w-15 h-10 rounded-xl border-gray-400 outline-none"
            />
          </div>
          <div className="my-6">
            <p>
              <label htmlFor="pwd">Password</label>
            </p>
            <input
              type="password"
              id="pwd"
              className="border-2 w-15 h-10 rounded-xl border-gray-400 outline-none	"
            />
          </div>
          <div className=" my-6">
            <button className=" rounded-2xl cursor-pointer hover:bg-orange-600 text-white  w-20 h-10 bg-orange-500">
              sign up
            </button>
          </div>
          <p className="text-orange-500 font-serif md:font-bold">

            Already have an account?
            <span
              onClick={() => {
                login(true);
              }}
              className="text-blue-500 cursor-pointer hover:text-orange-400">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
