import axios from 'axios';

const Backend_URL = 'https://server-64qt.onrender.com/application';

const getAllApplications = async () => {
    try {
        const response = await axios.get(Backend_URL);
        return response;
    } catch (error) {
        console.error('Error fetching applications', error);
        throw error;
    }
}

const applyforjob = async (formData) => {
    try {
        const response = await axios.post(`${Backend_URL}/apply`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response;
    } catch (error) {
        console.error('Error fetching application', error);
        throw error;
    }
}

export {
    getAllApplications,
    applyforjob
}