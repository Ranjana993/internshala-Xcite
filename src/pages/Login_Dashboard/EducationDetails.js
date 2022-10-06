import React from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EducationDetails = () => {
  return (
    <div className='mt-40 ml-36'>
      <div className='flex '>
        <FaChevronCircleLeft className='text-primary w-14 h-14'></FaChevronCircleLeft>
        <div className='ml-36'>
          <h1 className=' text-4xl'>Add Your educational details</h1>
          <form action="" className={`flex flex-col w-[30rem] leading-[2rem] text-1xl `}>
            <label className={`mt-12 `} htmlFor="course"> Course / Degree</label>
            <input className={` border-2 border-slate-200 w-3/4 h-[40px] rounded-xl outline-none indent-2 font-thin `} type="text" />
            <label className={`mt-12`} htmlFor="course"> Name of school / college</label>
            <input className={` border-2 border-slate-200 w-90 h-[40px] rounded-xl outline-none indent-2 font-thin `} type="text" />
            <label className={`mt-12`} htmlFor="course"> Year of Passing</label>
            <input className={` border-2 border-slate-200 w-2/4 h-[40px] rounded-xl outline-none indent-2 font-thin `} type="text" />
            <Link to={"#"} className={`text-orange-500 text-lg mt-12`}>+ <span className='underline'>Add school</span></Link>
            <button className={`border-2 border-orange-500 text-orange-500 w-[100px] rounded-full mt-12 ml-[36rem] `}> next</button>
          </form>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default EducationDetails;

