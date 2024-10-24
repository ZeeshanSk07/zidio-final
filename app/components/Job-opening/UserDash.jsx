import React, { useEffect, useState } from "react";
import "./UserDash.css";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { IoMdEye } from "react-icons/io";
import { PiExcludeSquareFill } from "react-icons/pi";
import { IoBriefcase } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { getAllJobs, getJobById } from "../../api/job";
import { useNavigate } from "react-router-dom";
import { applyforjob } from "../../api/application";
import { TailSpin } from "react-loader-spinner";

function UserDash() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [del, setDel] = useState("");

  const [token, setToken] = useState(null);
  const [id, setId] = useState("");

  const [active, setActive] = useState("");
  const [editmodal, setEditModal] = useState(false);
  const [viewmodal, setViewModal] = useState(false);

  const [fetchjobbyid, setFetchjobbyid] = useState();
  const [jobrole, setJobRole] = useState("");
  const [minexp, setMinexp] = useState(0);
  const [maxexp, setMaxexp] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [locationType, setLocationType] = useState("On-site");
  const [jobType, setJobType] = useState("Full-time");
  const [salary, setSalary] = useState(0);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobid, setJobid] = useState("");

  const [apply, setApply] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  useEffect(() => {
    fetchJobs();
  }, []);


  const navigate = useNavigate();

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
        console.log("Error fetching soils:", alljobs.data);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error fetching soils:", error);
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
        setJobid(view.data.job._id);
      } else {
        toast.error("Error fetching job details");
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      toast.error("Error viewing job!");
      setLoading(false);
    }
  };

  const submitApplication = async (e) => {
    e.preventDefault();
    try {
      if (!resume) {
        toast.error("Please upload a resume");
        return;
      }

      const formData = new FormData();
      formData.append("jobId", jobid);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("resume", resume);
      formData.append("jobrole", jobrole);
      for (let pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]); // Logging the FormData key-value pairs
      }
      setLoading(true);
      const res = await applyforjob(formData);
      setLoading(false);
      console.log(res);
      if (res.status === 200) {
        toast.success("Application submitted successfully");
        setApply(false);
        setName("");
        setEmail("");
        setResume("");
        setActive("");
      } else {
        toast.error("Error applying for job");
        setApply(true);
      }
    } catch (err) {
      console.log(err);
      toast.error("Error applying for job");
      setLoading(false);
    }
  };

  return (
    <div className="Userdashboard">
      <button
        onClick={(e) => navigate("/login")}
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          backgroundColor: "rgb(214, 213, 213)",
          color: "black",
          fontWeight: "600",
          zIndex: 10,
        }}
      >
        Admin
      </button>
      <div className="content">
        <h1>Job Openings</h1>
        
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
                      size={36}
                    />
                  </span>
                </div>
              </div>
            );
          })}
          
        {viewmodal && (
          <>
            <div className="modal-backdrop"></div>
            <div style={{ width: "40vw" }} className="view-container">
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
                    <span>Job Role : {fetchjobbyid.jobrole}</span>
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
                    <div>{fetchjobbyid.description}</div>
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
                  <button
                    onClick={(e) => {
                      setApply(true);
                      setViewModal(false);
                      console.log(jobid);
                    }}
                    style={{
                      display: "flex",
                      backgroundColor: "rgb(214, 213, 213)",
                      color: "black",
                      margin: "1rem auto 1rem auto",
                      justifyContent: "flex-start",
                      alignItems: "start",
                      float: "none",
                      fontWeight: "600",
                      zIndex: 10,
                    }}
                  >
                    Easy Apply
                  </button>
                </div>
              ) : (
                <>
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
                  <p>No data available.</p>
                </>
              )}
            </div>
          </>
        )}

        {apply && (
          <>
            <div className="modal-backdrop"></div>
            <div className="view-container apply-form">
              <div className="close-icon">
                <RxCross2
                  onClick={() => {
                    setApply(false);
                    setActive(false);
                  }}
                  size={28}
                />
              </div>
              <h1>Application Form</h1>
              <form onSubmit={(e) => submitApplication(e)}>
                <div className="details-section">
                  <label htmlFor="name">Name : </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="details-section">
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="details-section">
                  <label htmlFor="Resume">Resume : </label>
                  <input
                    type="file"
                    id="Resume"
                    name="Resume"
                    accept="application/pdf"
                    required
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </>
        )}
        {loading ? (
          <>
          <div className="spinner-container">
            <TailSpin
              visible={true}
              
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
            />
          </div>
          </>
        ) : (
        <>
        </>
      )}
      </div>
    </div>
  );
}

export default UserDash;
