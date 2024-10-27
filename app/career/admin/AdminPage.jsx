"use client"
import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/Job-opening/AdminNav';
import AdminDash from '../../components/Job-opening/AdminDash';
import Sidebar from '../../components/Job-opening/Sidebar';
import "./AdminPage.css";
import { useRouter } from 'next/navigation';

function AdminPage() {

  const [newjob, setNewjob] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isapplication, setIsapplication] = useState(false);


  const router = useRouter();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(!token){
      router.push('/career');
    }
  },[])
  return (
    <>
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