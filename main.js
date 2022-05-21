const axios = require("axios");

const Methods = {
    sum: (a, b) => a + b,
    getNull: () => null,
    getUndefined: () => undefined,
    checkValue: (x) => x,
    reverse: (word) => word.split("").reverse().join(""),
    getUser: async(id) => {
        const url = `https://jsonplaceholder.typicoded.com/users/${id}`;
        try {
            const data = await axios.get(url);
            return data.data;
        } catch (error) {
            return error.status;
        }
    },
    getError: () => {
        throw new Error("Server Error");
    }
};

module.exports = Methods;