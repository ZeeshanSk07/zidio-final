import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
import "./AdminNav.css";
import { FaUser } from "react-icons/fa";
import { HiOutlineLogout, HiOfficeBuilding } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosPaper } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TailSpin } from "react-loader-spinner";


function AdminNav({newjob, setNewjob, update, setUpdate,isapplication, setIsapplication}) {

  const [avatarModal, setAvatarModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  return (
    <>
      <div className="navbar">
        <nav>
          <GiHamburgerMenu onClick={(e) => {
               setAvatarModal(true);
               setClosing(false);
              }} className="sidebarlogo" color="#eaeaea" size={34}/>
          <ul>
            <p>
              <Image src={avatar} alt="avatar" />
            </p>
          </ul>
        </nav>
      </div>
      {loading ? (
          <div className="spinner-container">
            <TailSpin
              visible={true}
              
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
            />
          </div>
        ) : (
        <>
        </>
      )}
      {avatarModal && (
        <div className={`avatar-modal1 ${closing ? "slide-out" : ""}`}>
        <div className="sidehead">
          {/* <img className="headimg" src={zidiologo} alt="Logo" />
          <h1 className="heading">Admin panel</h1> */}
          <RxCross2 onClick={(e)=>{
            setAvatarModal(false);
            setClosing(true);
          }} size={36} color="#eaeaea" style={{margin:'0 -0.3rem 3rem 0.5rem'}}/>

        </div>
        <p onClick={(e)=>{
          setIsapplication(false);
          setAvatarModal(false);
        }}>
          <FaHome size={22}/>
          <span>Home</span>
        </p>
        <p
          onClick={(e) => {
            setUpdate(true);
            setAvatarModal(false);
          }}
        >
          <FaUser size={22} />
          <span>Update Profile</span>
        </p>

        <p
          onClick={(e) => {
            setNewjob(true);
            setAvatarModal(false);
            
          }}
        >
          <HiOfficeBuilding size={22} />
          <span>Post New Job</span>
        </p>

        <p onClick={(e)=>{
          setIsapplication(true);
          setAvatarModal(false);
        }}>
          <IoIosPaper size={22} />
          <span>Applications</span>
        </p>

        <p onClick={(e)=>{
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          router.push('/career');
        }}>
          <HiOutlineLogout />
          <span>Log out</span>
        </p>
      </div>
        )}
    </>
  );
}

export default AdminNav;