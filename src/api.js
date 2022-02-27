import axios from 'axios';

const url = 'http://localhost:8000';
// const url = 'https://enchante-22-api.vercel.app';

export const server = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getNotifications = () => server.get(`/notice`);
export const PostNotifications = (data) => server.post(`/notice`, data);
export const login = (data) => server.post(`/login`, data);
