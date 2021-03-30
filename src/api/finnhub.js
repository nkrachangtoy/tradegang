import axios from "axios";
import {API_KEY} from '@env';

const instance = axios.create({
    baseURL: "https://finnhub.io/api/v1",
    headers: {
        "X-Finnhub-Token": API_KEY
    }
})

export default instance;