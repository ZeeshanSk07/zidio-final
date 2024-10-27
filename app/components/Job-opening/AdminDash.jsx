import React, { useEffect, useState } from "react";
import "./AdminDash.css";
import toast from "react-hot-toast";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoMdEye } from "react-icons/io";
import { PiExcludeSquareFill } from "react-icons/pi";
import { IoBriefcase } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { getAllJobs, deleteJob, getJobById, updateJob } from "../../api/job";
import Applications from "./Applications";
import {TailSpin} from 'react-loader-spinner';
import {GiHamburgerMenu} from 'react-icons/gi';
import { HiOutlineLogout, HiOfficeBuilding } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { FaUser } from "react-icons/fa";


function AdminDash({isapplication, setIsapplication}) {
  const [jobs, setJobs] = useState([]);
  const [del, setDel] = useState("");
  const [loading, setLoading] = useState(false);

  const [avatarModal, setAvatarModal] = useState(false);

  const [token, setToken] = useState(null);
  const [id, setId] = useState("");

  const [active, setActive] = useState("");
  const [editmodal, setEditModal] = useState(false);
  const [viewmodal, setViewModal] = useState(false);
  const [closing, setClosing] = useState(false);

  const [fetchjobbyid, setFetchjobbyid] = useState();
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
  const [jobid, setJobid] = useState('');

  useEffect(() => {

    fetchJobs();
  }, [jobs]);

  const fetchJobs = async () => {
    const tok = localStorage.getItem("token");
    setToken(tok);
    try {
      setLoading(true);
      const alljobs = await getAllJobs();
      setLoading(false);
      if (alljobs.status === 200) {
        setJobs(alljobs.data.jobs);

      } else {
        console.log("Error fetching jobs:", alljobs.data);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error fetching jobs:", error);
    }
  };

  const viewjob = async (e, i_id) => {
    e.preventDefault();
    setViewModal(true);
    console.log("view id :", i_id);
    setActive(i_id);
    try {
      setLoading(true);
      const view = await getJobById(i_id);
      setLoading(false);
      if (view.status === 200) {
        setFetchjobbyid(view.data.job);
        setJobRole(view.data.job.jobrole);
        setMinexp(view.data.job.minexp);
        setMaxexp(view.data.job.maxexp);
        setDescription(view.data.job.description);
        setSalary(view.data.job.salary);
        setLocation(view.data.job.location);
        setLocationType(view.data.job.locationType);
        setJobType(view.data.job.jobType);
        setSkills(view.data.job.skills);
        setCompanyName(view.data.job.companyName);
        setJobid(view.data.job.id);
      } else {
        toast.error("Error fetching job details");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      toast.error("Error viewing job!");
    }
  };

  const AddSkill = () =>{
    setSkills([...skills, skillInput]);
    setSkillInput('');
  }

  const canceledit = () =>{
    setEditModal(false);
    setFetchjobbyid(null);
    setJobRole('');
    setMinexp(0);
    setMaxexp(0);
    setDescription('');
    setSalary(0);
    setLocation('');
    setLocationType('On-site');
    setJobType('Full-time');
    setSkills([]);
    setCompanyName('');
    setJobid('');
  }

  const removeskills = (indexToRemove) =>{
    setSkills(skills.filter((_, index) => index!== indexToRemove));
  }

  const del_job = async (id) => {
    setDel(id);
    try{
      setLoading(true);
      const res = await deleteJob(id, token);
      setLoading(false);
      if(res.status === 200){
        toast.success("Job deleted successfully!");
        fetchJobs();
        setDel("");
        setActive("");
        
      } else {
        toast.error("Error deleting job!");
      }
    }catch(err){
      setLoading(false);
      toast.error("Error deleting job");
    }
  }

  const editjobbyid = async(e, i_id) => {
    e.preventDefault();
    setEditModal(true);
    console.log("edit id :", i_id);
    setActive(i_id);
    try {
      setLoading(true);
      const view = await getJobById(i_id, token);
      setLoading(false);
      if (view.status === 200) {
        setFetchjobbyid(view.data.job);
        setJobRole(view.data.job.jobrole);
        setMinexp(view.data.job.minexp);
        setMaxexp(view.data.job.maxexp);
        setDescription(view.data.job.description);
        setSalary(view.data.job.salary);
        setLocation(view.data.job.location);
        setLocationType(view.data.job.locationType);
        setJobType(view.data.job.jobType);
        setSkills(view.data.job.skills);
        setCompanyName(view.data.job.companyName);
        setJobid(view.data.job._id);
      } else {
        toast.error("Error fetching job details");
      }
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast.error("Error editing job!");
      }
  }

  const editjob = async(e) =>{
    e.preventDefault();
    try {
      setLoading(true);
      const res = await updateJob(
        token,
        jobid,
        companyName,
          minexp,
          maxexp,
          description,
          salary,
          jobrole,
          location,
          locationType,
          jobType,
          skills);
      setLoading(false);
      if (res.status === 200) {
        toast.success("Job updated successfully!");
        setEditModal(false);
        setFetchjobbyid(null);
        setJobRole('');
        setMinexp(0);
        setMaxexp(0);
        setDescription('');
        setSalary(0);
        setLocation('');
        setLocationType('On-site');
        setJobType('Full-time');
        setSkills([]);
        setCompanyName('');
        setJobid('');
        fetchJobs();
      } else {
        toast.error("Error updating job!");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error('error updating job');
  }
}

  return (
    !isapplication ? (
      <div className="dashboard">
      <h1 className="onhead">Job Openings</h1>
      <GiHamburgerMenu onClick={(e) => {
               setAvatarModal(true);
               setClosing(false);
              }} className="sidebarlogo1" color="white" size={34}/>
      <div className="content">
        {(jobs || [])
          .slice()
          .reverse()
          .map((i, index) => {
            return (
              <div key={index} className="table-edit-wrapper">
                <div
                  onClick={(e) => {
                    viewjob(e, i._id);
                  }}
                  className={`table ${active === i._id ? "active1" : ""} `}
                >
                  <div>
                    <PiExcludeSquareFill className="companylogo" size={30} />
                  </div>
                  <div className="col">
                    <div className="title">
                      <span> {i.jobrole}</span>
                    </div>
                    <div className="companyName">{i.companyName}</div>
                    <div className="color">
                      <IoBriefcase />
                      <span>
                        {i.minexp}-{i.maxexp}
                      </span>
                    </div>
                    <div className="color">
                      <FaLocationDot />
                      <span>{i.location}</span>
                    </div>
                  </div>
                </div>
                <div className="edit">
                  <span className="delbtn">
                    <IoMdEye
                      onClick={(e) => {
                        viewjob(e, i._id);
                      }}
                      style={{ color: "rgb(214, 213, 213)" }}
                      size={30}
                    />
                  </span>
                  <span
                    className="editbtn"
                    onClick={(e) => {
                      setActive(i._id);
                      setId(i._id);
                      editjobbyid(e, i._id);
                      setEditModal(true);
                    }}
                  >
                    <RiEdit2Fill size={28} style={{ color: "rgb(214, 213, 213)" }} />
                  </span>
                  <span
                    className="delbtn"
                    onClick={(e) => {
                      setDel(i._id);
                      setActive(i._id);
                      setId(i._id);
                    }}
                  >
                    <MdDelete size={28} style={{ color: "rgb(214, 213, 213)" }}/>
                  </span>
                </div>
              </div>
              
            );
          })}
          {avatarModal && (
        <div className={`avatar-modal1 ${closing ? "slide-out" : ""}`}>
        <RxCross2 onClick={(e)=>{
            setAvatarModal(false);
            setClosing(true);
          }} size={36} color="white" style={{margin:'1.5rem 0.8rem 3rem 0',position:'absolute', right:'0'}}/>
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
          navigate('/jobs');
        }}>
          <HiOutlineLogout />
          <span>Log out</span>
        </p>
      </div>
        )}

        {editmodal && (
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
                <RxCross2
                  onClick={(e) => {
                    canceledit();
                  }}
                  size={32}
                />
              </div>
              <h1>Edit Job</h1>
              <form
                onSubmit={(e) => {
                  editjob(e);
                }}
                className="newjob"
              >
                <label for="jobrole">
                  Job Role :
                  <input
                    type="text"
                    id="jobrole"
                    name="jobrole"
                    value={jobrole}
                    placeholder="Job role"
                    onChange={(e) => setJobRole(e.target.value)}
                  />
                  <br />
                </label>
                <label for="experience">
                  Experience :
                  <input
                    style={{ width: "5vw" }}
                    type="text"
                    id="experience"
                    name="experience"
                    placeholder="Min Exp."
                    value={minexp}
                    onChange={(e) => setMinexp(Number(e.target.value))}
                  />{" "}
                  <input
                    style={{ width: "5vw" }}
                    type="text"
                    id="experience"
                    name="experience"
                    value={maxexp}
                    placeholder="Max Exp"
                    onChange={(e) => setMaxexp(Number(e.target.value))}
                  />
                  <br />
                </label>
                <label for="location">
                  Location :
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    placeholder="Enter Company Location"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <br />
                </label>
                <label for="description">
                  Job Description :<br />
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    placeholder="Job Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <br />
                </label>
                <label for="locationType">
                  Location Type :
                  <select
                    id="locationType"
                    name="locationType"
                    value={locationType}
                    defaultChecked="Location Type"
                    onChange={(e) => setLocationType(e.target.value)}
                  >
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                  <br />
                </label>
                <label for="jobType">
                  Job Type :
                  <select
                    id="jobType"
                    name="jobType"
                    value={jobType}
                    defaultValue="Job Type"
                    onChange={(e) => setJobType(e.target.value)}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                  </select>
                  <br />
                </label>
                <label for="salary">
                  Salary (in LPA) :
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    placeholder="Enter Salary"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                  />
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
                    <button
                      className="charbtn"
                      type="button"
                      onClick={AddSkill}
                    >
                      Add
                    </button>
                  </label>

                  {skills.map((item, index) => (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#69B735",
                        width: "fit-content",
                        margin: "0.5rem",
                        borderRadius: "0.4rem",
                        padding: "0.3rem",
                      }}
                      key={index}
                    >
                      {item}{" "}
                      <RxCross2
                        style={{ marginLeft: "0.5rem" }}
                        onClick={(e) => removeskills(index)}
                      />
                    </span>
                  ))}
                </div>
                <label for="companyName">
                  Company :
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={companyName}
                    placeholder="Enter Company Name"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <br />
                </label>
                <button className="newjobbtn" type="submit">
                  Update
                </button>
              </form>
            </div>
          </>
        )}
        {viewmodal && (
          <>
            <div className="modal-backdrop"></div>
            <div style={{width:'40vw'}} className="view-container">
              {fetchjobbyid ? (
                <div style={{height:'90vh', overflowY:'scroll', scrollbarWidth:'none'}}>
                  <div className="close-icon">
                    <RxCross2
                      onClick={() => {
                        setViewModal(false);
                        setFetchjobbyid("");
                        setActive("");
                        setDel("");
                      }}
                      size={28}
                    />
                  </div>
                  <h1>Job Opening</h1>
                  <div className="details-section">
                    <span>{fetchjobbyid.jobrole}</span>
                  </div>
                  <div className="details-section">
                    <span>Location Type :</span>
                    <div>{fetchjobbyid.locationType}</div>
                  </div>
                  <div className="details-section">
                    <span>Job Type:</span>
                    <div>{fetchjobbyid.jobType}</div>
                  </div>
                  <div className="details-section">
                    <span>Experience:</span>
                    <div>
                      {fetchjobbyid.minexp}-{fetchjobbyid.maxexp}
                    </div>
                  </div>
                  <div className="details-section">
                    <span>Salary (in LPA):</span>
                    <div>{fetchjobbyid.salary}</div>
                  </div>
                  <div className="details-section">
                    <span>Company Name:</span>
                    <div>{fetchjobbyid.companyName}</div>
                  </div>
                  <div className="details-section">
                    <h3>Job Description:</h3>
                    <div className="descrip">{fetchjobbyid.description}</div>
                  </div>
                  <div className="details-section">
                    <h3>Skills Required :</h3>
                    <ul>
                      {fetchjobbyid.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="details-section">
                    <span>Location :</span>
                    <div>{fetchjobbyid.location}</div>
                  </div>
                </div>
              ) : (
                <p>No data available.</p>
              )}
            </div>
          </>
        )}

        {del && (
          <>
            <div className="modal-backdrop"></div>
            <div className="delete-confirm">
              <h2>Do you want to delete?</h2>
              <div className="buttons">
                <button
                  onClick={() => {
                    del_job(del);
                    setActive("");
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setDel("");
                    setActive("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
        {!loading ? (
          <div className="spinner-container1">
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
      </div>
    </div>
    ) : (
      <Applications/>
    )
  
  );
}

export default AdminDash;
