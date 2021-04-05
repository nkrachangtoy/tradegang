import axios from 'axios'

const instance = axios.create({
    baseURL: "https://mobileprojectapi20210329154219.azurewebsites.net",
})

export default instance;