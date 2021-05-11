import axios from "axios";

// then we make the requests, we add the url tp the fetch urls
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance