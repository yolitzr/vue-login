import axios from "axios";

const ENDPOINT = process.env.VUE_APP_ENDPOINT_PATH;

export default {
  register(email, first_name, last_name, username, plainTextPassword) {
    const user = { email, first_name, last_name, username, plainTextPassword };
    return axios.post(ENDPOINT + "register", user);
  },

  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT + "login", user);
  },
};
