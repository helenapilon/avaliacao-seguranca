import axios from "axios";

export default axios.create({
  // baseURL: process.env.API_URL || "https://sistema-academico-api.onrender.com/",
  //baseURL: "http://localhost:8080/",
   baseURL: "https://obsidian-nimble-street.glitch.me/",
  headers: {
    "Content-type": "application/json",
  },
});
