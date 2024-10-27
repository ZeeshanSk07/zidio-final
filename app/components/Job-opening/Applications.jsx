import React, { useState, useEffect } from "react";
import "./Applications.css";
import { getAllApplications } from "../../api/application";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { getJobById } from "../../api/job";
import { TailSpin } from "react-loader-spinner";

const Applications = () => {
  const [application, setApplication] = useState([]);

  const [viewModal, setViewModal] = useState(false);
  const [fetchjobbyid, setFetchjobbyid] = useState({});
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("");
  const [del, setDel] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [salary, setSalary] = useState("");
  const [skills, setSkills] = useState([]);
  const [minexp, setMinexp] = useState("");
  const [maxexp, setMaxexp] = useState("");
  const [location, setLocation] = useState("");
  const [locationType, setLocationType] = useState("");
  const [jobType, setJobType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchapplication = async () => {
      try {
        const response = await getAllApplications();
        console.log(response.data.applications);
        if (response.status === 200) {
          setApplication(response.data.applications);
          console.log("all applications found");
        } else {
          console.log("Error fetching applications");
        }
      } catch (err) {
        console.log("Error fetching applications", err);
      }
    };
    fetchapplication();
  }, []);

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
      } else {
        toast.error("Error fetching job details");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Error viewing job!");
    }
  };

  return (
    <>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Job Title</th>
              <th>Name</th>
              <th>Email</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(application) && application.length > 0 ? (
              application.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <a href="#" onClick={(e) => viewjob(e, item.jobId)}>
                      {item.jobrole}
                    </a>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <a
                      href={`https://server-64qt.onrender.com/uploads/resumes/${item.resumeUrl
                        .split("/")
                        .pop()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Applications Found</td>
              </tr>
            )}
          </tbody>
        </table>
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
      {viewModal && (
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
                  <div>{fetchjobbyid.description}</div>
                </div>
                <div className="details-section">
                  <h3>Skills Required :</h3>
                  {fetchjobbyid.skills && fetchjobbyid.skills.length > 0 ? ( // Check if skills exist
                    <ul>
                      {fetchjobbyid.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No skills listed.</p>
                  )}
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
    </>
  );
};

export default Applications;
