import axios from 'axios';

const URL_FAKE_USERS = `https://randomuser.me/api/?results=500`;
const URL_DOGS = `https://random.dog/doggos`;
const URL_API = `http://localhost:3001`

export const fakeUsers: Function = () => {
    const req = axios.create({
        baseURL: URL_FAKE_USERS,
    });
    return req.get('');
};

export const dogs: Function = () => {
    const req = axios.create({
        baseURL: URL_DOGS,
    });
    return req.get('');
};

export const api = axios.create({
    baseURL: URL_API,
});
