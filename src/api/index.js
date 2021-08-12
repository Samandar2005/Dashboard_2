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