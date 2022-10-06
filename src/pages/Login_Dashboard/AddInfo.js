import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const AddInfo = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-primary mr-6 text-white font-normal text-xl">
                    <li className=' ml-8 h-12 w-56 mt-20'><img src='https://i.ibb.co/Wx0TpPq/logo.png' alt='xcitedu'></img></li>
                    <li className='mt-20 ml-8'><Link to='/addinfo'>PERSONAL DETAILS</Link></li>
                    <li className='ml-8 mt-5'><Link to='education'>EDUCATION</Link></li>
                    <li className='ml-8 mt-5'><Link to='workexperience'>WORK EXPERINCE</Link></li>
                    <li className='ml-8 mt-5'><Link to='certificates'>CERTIFICATES</Link></li>
                    <li className='ml-8 mt-5'><Link to='skills'>SKILLS</Link></li>
                    <li className='ml-8 mt-5'><Link to='profilelinks'>PROFILE LINKS</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AddInfo;