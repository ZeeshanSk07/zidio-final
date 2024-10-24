import React, { useState, useEffect } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import zidiologo from "../../assets/zidio.png";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import "./Sidebar.css";
import { updateAdmin } from "../../api/user";
import toast from "react-hot-toast";
import {createJob} from "../../api/job";
import {useNavigate} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import {TailSpin } from 'react-loader-spinner'

function Sidebar({newjob, setNewjob, update, setUpdate, isapplication, setIsapplication}) {

  const [loading, setLoading] = useState(false);

  //basic states from localstorage
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  //states for updating profile
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //states for New Job
  const [jobrole, setJobRole] = useState('');
  const [minexp, setMinexp] = useState(0);
  const [maxexp, setMaxexp] = useState(0);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [locationType, setLocationType] = useState('On-site');
  const [jobType, setJobType] = useState('Full-time');
  const [salary, setSalary] = useState(0);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [companyName, setCompanyName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const tok = localStorage.getItem("token");
    if (tok) {
      setToken(tok);
    }
    const userid = localStorage.getItem("user");
    if (userid) {
      setUser(userid);
    }
  }, []);

  const UpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await updateAdmin(user, email, password, token);
      setLoading(false);
      if (response.status === 200) {
        toast.success("Profile updated successfully");
        setUpdate(false);
      } else {
        console.log("Failed to update profile");
        toast.error("Sorry! profile not updated");
      }
    } catch (er) {
      console.log(er);
      toast.error("Failed to update profile");
      setLoading(false);
    }
  };

  const AddSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const removeskills = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  const postJob = async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const response = await createJob(
        token, 
        companyName,
        minexp,
        maxexp,
        description,
        salary,
        jobrole,
        location,
        locationType,
        jobType,
        skills
      );
      setLoading(false);
      console.log(response);
      if (response.status === 201) {
        toast.success("Job posted successfully");
        setNewjob(false);
        fetchjobs();
      } else {
        console.log("Failed to post job");
        toast.error("Sorry! Job not posted");
      }
    }catch(err){
      console.log(err);
      setLoading(false);
      toast.error(err.response.data.message || err.response.message || "Failed to post job");
    }
  }
  return (
    <>
      <div className="avatar-modal">
        {/* <div className="sidehead">
          <img className="headimg" src={zidiologo} alt="Logo" />
          <h1 className="heading">Admin panel</h1>
        </div> */}
        <p onClick={(e)=>{
          setIsapplication(false);
        }}>
          <FaHome size={22}/>
          <span>Home</span>
        </p>
        <p
          onClick={(e) => {
            setUpdate(true);
          }}
        >
          <FaUser size={22} />
          <span>Update Profile</span>
        </p>

        <p
          onClick={(e) => {
            setNewjob(true);
          }}
        >
          <HiOfficeBuilding size={22} />
          <span>Post New Job</span>
        </p>

        <p onClick={(e)=>{
          setIsapplication(true);
        }}>
          <IoIosPaper size={22} />
          <span>Applications</span>
        </p>

        <p onClick={(e)=>{
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate('/jobs');
        }}>
          <HiOutlineLogout />
          <span>Log out</span>
        </p>
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

      {/* Update model */}
      {update && (
        <>
        <div className="modal-backdrop"></div>
        <div className="form-container">
          <div
            style={{
              display: "flex",
              float: "right",
              marginRight: "-0.5rem",
              cursor: "pointer",
            }}
          >
            <RxCross2 onClick={(e) => {setUpdate(false);
            }} size={32} />
          </div>
          <h1>Update Profile</h1>
          <form onSubmit={(e) => UpdateProfile(e)}>
            <label>
              Email :
              <input
                type="email"
                style={{ marginLeft: "1rem" }}
                name="updusername"
                placeholder="New Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password :
              <input
                type="text"
                name="updpassword"
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="buttons">
              <button type="submit">Update</button>
              <button onClick={(e) => setUpdate(false)}>Cancel</button>
            </div>
          </form>
        </div>
        </>
      )}

      {newjob && (
        <>
        <div className="modal-backdrop"></div>
        <div className="form-container createjob">
          <div
            style={{
              display: "flex",
              float: "right",
              marginRight: "-0.5rem",
              cursor: "pointer",
            }}
          >
            <RxCross2 onClick={(e) => {setNewjob(false);
            setSkillInput('');
            setCompanyName('');
            setJobRole('');
            setMinexp(0);
            setMaxexp(0);
            setDescription('');
            setLocation('');}} size={32} />
          </div>
          <h1>Post New Job</h1>
          <form onSubmit={(e)=>{postJob(e)}} className="newjob">
            <label for="jobrole">
              Job Role :
              <input type="text" id="jobrole" name="jobrole" placeholder="Job role" onChange={(e)=>setJobRole(e.target.value)}/>
              <br />
            </label>
            <label for="experience">
              Experience :
              <input className="expinput" type="text" id="experience" name="experience" placeholder="Min Exp." onChange={(e)=>setMinexp(Number(e.target.value))}/> <input className="expinput" type="text" id="experience" name="experience" placeholder="Max Exp" onChange={(e)=>setMaxexp(Number(e.target.value))}/>
              <br />
            </label>
            <label for="location">
              Location :
              <input type="text" id="location" name="location" placeholder="Enter Company Location" onChange={(e)=>setLocation(e.target.value)}/>
              <br />
            </label>
            <label for="description">
              Job Description :<br/>
              <textarea type="text" id="description" name="description" placeholder="Job Description" onChange={(e)=>setDescription(e.target.value)}/>
              <br />
            </label>
            <label for="locationType">
              Location Type :
              <select id="locationType" name="locationType" value={locationType} defaultChecked="Location Type" onChange={(e)=>setLocationType(e.target.value)}>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <br />
            </label>
            <label for="jobType">
              Job Type :
              <select id="jobType" name="jobType" defaultValue="Job Type" onChange={(e)=>setJobType(e.target.value)}>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>                
              </select>
              <br />
            </label>
            <label for="salary">
              Salary (in LPA) :
              <input type="text" id="salary" name="salary" placeholder="Enter Salary" onChange={(e)=>setSalary(Number(e.target.value))}/>
              <br />
            </label>
            <div>
              <label>
                    <span> Skills : </span>
                    <input
                      type="text"
                      value={skillInput}
                      placeholder="Enter Skill"
                      onChange={(e) => setSkillInput(e.target.value)}
                    />
                    <button className="charbtn" type="button" onClick={AddSkill}>
                      Add
                    </button>
              </label>
              
                    {skills.map((item, index) => (
                      <span style={{display:"flex" ,alignItems:'center',backgroundColor:'#69B735', width:'fit-content', margin:'0.5rem',borderRadius:'0.4rem', padding:'0.3rem'}} key={index}>{item} <RxCross2 style={{marginLeft:'0.5rem'}} onClick={(e)=>removeskills(index)}/></span>
                    ))}
              
            </div>
            <label for="companyName">
              Company :
              <input type="text" id="companyName" name="companyName" placeholder="Enter Company Name" onChange={(e)=>setCompanyName(e.target.value)}/>
              <br />
            </label>
            <button className="newjobbtn" type="submit">Create</button>
          </form>
        </div>
        </>
      )}
    </>
  );
}

export default Sidebar;
