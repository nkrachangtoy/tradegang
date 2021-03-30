import axios from "axios";

const instance = axios.create({
    baseURL: "https://finnhub.io/api/v1",
})

export default instance;