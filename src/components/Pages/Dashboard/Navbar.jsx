import React, { useContext } from 'react';
// import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import axiosInstance from './../../../Utils/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders/AuthProviders';
import { toast } from 'react-toastify';

import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ sidebarToggle, setSidebarToggle, handleThemeChange }) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    console.log({user})
    
    const handleLogout = async ()=>{

        const refresh=JSON.parse(localStorage.getItem('refresh'))
        console.log('refresh token -> ',refresh)
        const res = await axiosInstance.post('auth/logout/', {'refresh_token':refresh})
        console.log("response after login -> ", res)
        if (res.status === 200) {
             localStorage.removeItem('access')
             localStorage.removeItem('refresh')
             localStorage.removeItem('user')
             navigate('/login')
             toast.warning("logout successful")
        }
      }
      
    return (
        <nav className='flex justify-between items-center gap-10  backdrop-filter backdrop-blur-3xl  w-full h-20 px-3 bg-gradient-to-t from-[#73e9fe] dark:from-[#8401A1] to-[#cef8ff] dark:to-[#140518]'>
            <div className='flex items-center text-xl'>
                <a href="/">
                    <img src={"https://i.ibb.co/T4FSNsb/Justlogo.png"} className="w-14 h-12 " alt="logo" />
                </a>
                <a href="/">
                    <h1 className="text-2xl  font-bold italic ">Project Syncify</h1>
                </a>
            </div>

            <div className='flex items-center gap-x-5'>
                {/* <div className='relative md:w-65'>
                    <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                        <button className='p-1 focus:outline-none  md:text-black'><FaSearch /></button>
                    </span>
                    <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block' placeholder='Search' />
                </div> */}
                <div className='mt-1'>
                    <label className="swap swap-rotate ">

                        <input type="checkbox" onChange={handleThemeChange} />

                        <svg className="swap-on fill-current w-6 h-6 md:w-8 md:h-8 text-[#8401A1] dark:text-[#73e9fe]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-6 h-6 md:w-8 md:h-8 text-[#8401A1] dark:text-[#73e9fe]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>

                <div className=''><FaBell className='w-6 h-6 ' /></div>

                <div className='relative'>
                    {
                        user ? <> <button className=' group '>
                        <FaUserCircle className='w-6 h-6 mt-1'/>
                        <div className='z-10 absolute hidden bg-slate-100 dark:bg-slate-900 rounded-lg shadow w-32 group-focus:block top-full right-0'>
                            <ul className='py-2 text-sm'>
                                <li><a href="">Profile</a></li>
                                <li><a href="">Setting</a></li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    </button></>
                      : <><Link to={'/login'} className='text-white'><FaUserCircle className='w-6 h-6 mt-1'/></Link></> 
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;