import React from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const WorkExperience = () => {
    return (
        <div className={`mt-[80px] ml-64 text-gray-700`}>
            <div className={` mr-[120px] flex justify-between`}>
                <FaChevronCircleLeft className='text-primary w-14 h-14' />
                <form className={`flex flex-col mx-20 w-[600px] leading-loose`}>
                    <h1 className=' text-4xl my-3 mb-10'>Add your work experience</h1>
                    <label htmlFor="jobTititle">Job Title</label>
                    <input className='border-2 border-gray-200 w-1/2 outline-none mb-2 indent-4 h-[40px] rounded-lg' type="text" />
                    <label htmlFor="organisation">Name of organisation</label>
                    <input className='border-2 border-gray-200 w-[80%] outline-none mb-2 indent-4 h-[40px] rounded-lg' type="text" />
                    <label htmlFor="jobTititle">Location</label>
                    <input className='border-2 border-gray-200 w-1/2 outline-none mb-2 indent-4 h-[40px] rounded-lg' type="text" />
                    <div className='flex flex-row justify-between mx-12 leading-loose ml-0 mt-10'>
                        <div className={``}>
                            <label htmlFor="startDate" className='w-full'>Start Date</label>
                            <input placeholder='' type="date" className='border-2 border-gray-200 mt-2 outline-none rounded-lg w-full' />
                        </div>
                        <div className='mr-16'>
                            <label htmlFor="endDate">Start Date</label>
                            <input placeholder='' type="date" className='border-2 border-gray-200 mt-2 outline-none rounded-lg w-full' />
                        </div>
                    </div>
                    <Link to={"#"} className={`text-orange-500 text-lg mt-12`}>+ <span className='underline'>ADD EXPERIENCE</span></Link>
                    <button className={`border-2 border-orange-500 text-orange-500 w-[100px] rounded-full mt-12 ml-[36rem] `}> next</button>
                </form>
            </div>
        </div>
    );
};

export default WorkExperience;