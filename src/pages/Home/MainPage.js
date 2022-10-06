import React from "react";
import { Link } from "react-router-dom";
import HomeGirl from "../../Assets/HomeGirl.png";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { MdSafetyDivider } from "react-icons/fa";

const MainPage = () => {
  return (
    <div className={"flex flex-row overflow-hidden"}>
      <div className={"bg-orange-400 h-screen w-[550px] flex flex-col "}>
        <h2 className={"bg-gray-700 text-white w-40  text-center mt-12 ml-10 p-2 h-12"}>
          XciteEducation
        </h2>
        <img className={"absolute  w-2/5 top-28 left-14 p-2 ml-9 mt-9"} src={HomeGirl} alt="Kicking Girl" />
      </div>
      <div className="m-auto mt-12">
        <div className={"my-12  flex flex-row justify-between w-full item-center"}>
          <Link to={"/candidateauth"} className={"border-2 rounded-full border-orange-500 text-center p-2 w-[130px] h-10"} href="#" >
            Register now
          </Link>
          <Link to={"/clogin"} className={`text-orange-500 rounded text-[18px] mt-4 ml-auto`} href="#">Login</Link>
          {/* <MdSafetyDivider icon="fa-light fa-pipe" /> */}
          <Link className={`text-[18px] rounded mt-4 ml-auto text-gray-700 text-bold inset-y-0 left-0 `} href="#">For employers</Link>
        </div>
        <div className={`w-[490px]`}>
          <h1 className="text-3xl m-auto mt-20 ">
            Looking for internships ?
          </h1>
          <p className={`mt-9`} > We are here to help you find the best <br /> internship . </p>
          <div className={`bg-slate-200 h-10 indent-2 justify-center rounded-lg my-12 w-[320px] `}>
            <input type="text" className="bg-slate-200 w-60 outline-none border-none items-center mt-2" placeholder="search jobs by titles or skills" />
            <span className="mr-10"><SearchIcon className={`text-gray-400`} /> </span>
          </div>
          <div className={`bg-slate-200 h-10 indent-2 justify-center rounded-lg w-[320px]  `}>
            <input className="bg-slate-200 w-60 outline-none border-none items-center mt-2" type="text" placeholder="city , state or pin code " />
            <span> <LocationOnIcon className={`text-gray-400`} /></span>
          </div>
          <button className={`bg-orange-500 w-[90px] p-2 rounded-full mt-20 ml-[200px] text-white `}> Search</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;