import axios from "axios";

const URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3001" : "";

function getMessages() {
  return axios.get(`${URL}/getmessages`);
}
function addMessage(data) {
  return axios.post(`${URL}/addmessage`, data);
}

export default {
  getMessages,
  addMessage
};
