import axios from "axios";
import API from "./API";

const QuantumsPageApiService = async (courseId , branchId , yearId) => {
    return await API.get(`/data/getQuantums`, {
        headers: {
            'Content-Type': 'application/json',
        },
        params : {
            "courseId" : courseId,
            "branchId" : branchId,
            "yearId" : yearId,
        }
    });
};

export default QuantumsPageApiService;
