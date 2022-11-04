import axios from '../../utils/axiosCustomize';
const postNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}

const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}
const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}
const deleteUsers = (userid) => {
    return axios.delete('api/v1/participant', { data: { id: userid } });
}
const postLogin = (email, password) => {
    return axios.post('api/v1/login', { email, password });
}
const postRegister = (email, password, username) => {
    return axios.post('api/v1/register', { email, password, username });
}
const getQuizByUser = () => {
    return axios.get('api/v1/quiz-by-participant');
}
const getDataQuiz = (quizid) => {
    return axios.get(`api/v1/questions-by-quiz?quizId=${quizid}`);

}
export { postNewUser, getAllUsers, putUpdateUser, deleteUsers, postLogin, postRegister, getQuizByUser, getDataQuiz }