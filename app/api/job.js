"use client"
import axios from "axios";

const Backend_Url = "https://server-64qt.onrender.com/job";

const getAllJobs = async () => {
  try {
    const response = await axios.get(Backend_Url);
    return response;
  } catch (error) {
    console.error("Error fetching jobs", error);
    throw error;
  }
};

const getJobById = async (id) => {
    try {
      const response = await axios.get(`${Backend_Url}/${id}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error fetching job by id", error);
      throw error;
    }
}

const deleteJob = async (id, token) => {
  try {
    const response = await axios.delete(`${Backend_Url}/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.error("Error deleting job", err);
    throw err;
  }
};

const createJob = async (
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
) => {
  try {
    const response = await axios.post(
      `${Backend_Url}/add`,
      {
        companyName,
        minexp,
        maxexp,
        description,
        salary,
        jobrole,
        location,
        locationType,
        jobType,
        skills,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.error("Error creating job", err);
    throw err;
  }
};

const updateJob = async (token,
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
          skills) => {
    try {
      const response = await axios.put(
        `${Backend_Url}/update/${jobid}`,
        {
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
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      return response;
    } catch (err) {
      console.error("Error updating job", err);
      throw err;
    }
  }

export { getAllJobs, deleteJob, createJob, getJobById, updateJob};
