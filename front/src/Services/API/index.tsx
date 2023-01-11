import axios from 'axios';

const URL_FAKE_USERS = `https://randomuser.me/api/?results=500`;

export const fakeUsers: Function = () => {
    const req = axios.create({
        baseURL: URL_FAKE_USERS,
    });
    return req.get('');
};
