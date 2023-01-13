import axios from 'axios';

const URL_FAKE_USERS = `https://randomuser.me/api/?results=500`;
const URL_DOGS = `https://random.dog/doggos`;

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
