import axios from "axios";
import API from "./API";

const BranchPageApiService = async (courseId) => {
    return await API.get(`/branch/getBranch`, {
        headers: {
            'Content-Type': 'application/json',
        },
        params : {
            "courseId" : courseId,
        }
    });
};

export default BranchPageApiService;
