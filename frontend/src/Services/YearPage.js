import axios from "axios";
import API from "./API";

const YearPageApiService = async (courseId) => {
    return await API.get(`/years/getYearsByCourseId`, {
        headers: {
            'Content-Type': 'application/json',
        },
        params : {
            "courseId" : courseId,
        }
    });
};

export default YearPageApiService;
