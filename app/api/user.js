import axios from 'axios';

const Backend_Url = 'https://server-64qt.onrender.com/user'

const AdminLog = async (email, password) => {
    try {
        const response = await axios.post(`${Backend_Url}/login`, { email, password });
        console.log(response.data);
        const { token } = response.data;
        const user = response.data.id;
        localStorage.setItem('user', user);
        localStorage.setItem('token', token);
        return response;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to login');
    }
}

const updateAdmin = async (user, email, password, token) => {
    try {
        const response = await axios.post(`${Backend_Url}/update/${user}`, { email, password },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update profile');
    }
}

export {
    AdminLog,
    updateAdmin
}