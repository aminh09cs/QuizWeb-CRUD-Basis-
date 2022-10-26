import axios from '../../utils/axiosCustomize';
const postNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', username);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}
export { postNewUser }