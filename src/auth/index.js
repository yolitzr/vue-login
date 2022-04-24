import axios from "axios";

const ENDPOINT = "https://api.ca-tech.dev/v1/security/";

export default {
  register(email, password, firstName, lastName) {
    const user = { email, password, firstName, lastName };
    return axios.post(ENDPOINT + "register", user);
  },

  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT + "login", user);
  },
};
