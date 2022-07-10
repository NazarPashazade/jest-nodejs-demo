const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/users/1";

const getUser = async () => {
  const user = await axios.get(url);
  return user.data;
};

module.exports = getUser;
