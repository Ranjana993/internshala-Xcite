import React from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';
import SearchIcon from '@mui/icons-material/Search';


const Skills = () => {
    return (
        <div className={`mt-[80px] ml-64 text-gray-700`}>
            <div className={` mr-[120px] flex justify-between`}>
                <FaChevronCircleLeft className='text-primary w-14 h-14 ' />
                <form className={`flex flex-col mx-20 w-[600px] leading-loose`}>
                    <h1 className=' text-3xl my-3 mb-10'>Add your Skills and intrest</h1>
                    <div className={`border-2 h-10 indent-2 justify-center rounded-lg my-12 w-[500px] `}>
                        <input type="text" className=" w-60 outline-none border-none " placeholder="eg. Python" />
                        <span className="relative left-36"><SearchIcon className={`text-orange-500 `} /> </span>
                    </div>
                    <div>
                        <div className="grid grid-rows-2 grid-flow-col gap-4">
                            <div className={`bg-slate-200 text-black rounded-lg indent-2 p-1 `}>Web Development</div>
                            <div className={`bg-slate-200 text-black rounded-lg indent-2 p-1`}>HTML</div>
                            <div className={`bg-slate-200 text-black rounded-lg indent-2 p-1`}>Javascript</div>
                            <div className={`bg-slate-200 text-black rounded-lg indent-2 p-1`}>CSS</div>
                            <div className={`bg-slate-200 text-black rounded-lg indent-2 p-1`}>Front-end</div>
                        </div>
                    </div>
                    <button className={`border-2 border-orange-500 text-orange-500 w-[100px] rounded-full mt-12 ml-[36rem] `}> next</button>
                </form>
            </div>
        </div>
    );
};

export default Skills;