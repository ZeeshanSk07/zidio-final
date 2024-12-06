"use client"
import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/Job-opening/AdminNav';
import AdminDash from '../../components/Job-opening/AdminDash';
import Sidebar from '../../components/Job-opening/Sidebar';
import "./AdminPage.css";
import { useRouter } from 'next/navigation';
import {Toaster} from 'react-hot-toast';

function AdminPage() {

  const [newjob, setNewjob] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isapplication, setIsapplication] = useState(false);

  const [isSticky,setIsSticky] =useState(false);
  const [isFixed, setIsFixed] = useState(false);


  const router = useRouter();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(!token){
      router.push('/career');
    }
  },[router])
  return (
    <>
        {/* <div id='nav' className={`absolute h-[100px] z-[3] transition ease-in duration-150 ${isSticky ? "visible": "invisible"}`}>
        <div className=''></div>
        <div className={`w-screen ${isFixed ? "fixed": "sticky"}  py-2 bg-[#0d1117] shadow-slate-950 shadow-md top-0 `}>
            <div className='max-w-[1280px] mx-auto pb-2 lg:pb-3 pt-1 flex lg:px-3 px-12 items-center max-lg:flex-col relative'>
              <button  className='lg:hidden absolute right-12 top-4'>
                  <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className={` text-white `}>
                      <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path>
                  </svg>
                  <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className={` text-white `}>
                      <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
              </button>
              <div className='flex text-center align-middle justify-center lg:flex-row flex-col text-[16px] max-lg:w-full flex-auto lg:space-x-16  text-white mt-2'>
                  <a>Productivity <div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-200 `}></div></a>

                  <a href="#collaboration" className={` max-lg:pt-2 `}>Collaboration<div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100`}></div></a>
            
                  <a href="#support" className={` max-lg:pt-2 `}>Support<div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 `}></div></a>


                  

                  <a className={` max-lg:pt-2 `}>Security<div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 `}></div></a>

                  <a className={` max-lg:pt-2 `}>Career<div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 `}></div></a>
              </div>
              
            </div>
        </div>
    </div> */}
    <Toaster position="top-center" reverseOrder={false}/>

        <div style={{display:'flex',flexDirection:'row', width:'100vw'}}>
            <div className='side'>
                <Sidebar isapplication={isapplication} setIsapplication={setIsapplication} newjob={newjob} setNewjob={setNewjob} update={update} setUpdate={setUpdate}/>
            </div>
            <div className='main'>
                <AdminDash isapplication={isapplication} setIsapplication={setIsapplication} />
            </div>
        </div>
    </>
  )
}

export default AdminPage