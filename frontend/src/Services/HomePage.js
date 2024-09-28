import axios from "axios"
import API from "./API"

const HomePageApiService = async () => {
    return await API.get("/course/getAllCourses", {
        headers: {
            'Content-Type': 'application/json',
        }
    });
};

export default HomePageApiService;