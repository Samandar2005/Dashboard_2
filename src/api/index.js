const axios = require('axios');

export const getTodos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=20`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}

export const GetUsers = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=20`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}
export const GetAlbums = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=20`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}
export const GetPhotos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}
export const GetPosts = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}
