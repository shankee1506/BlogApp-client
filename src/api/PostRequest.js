import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000/api' });



export const getTimelinePosts = (id) => API.get(`/post/timeLinePosts/${id}`);
export const likePost=(id, user)=>API.put(`post/like/${id}`, {user: user})
