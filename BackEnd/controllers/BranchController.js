const Branch = require("../models/Branch");
const Course = require("../models/Course");

exports.createBranch = async (request , response) => {
    try {
        const {name , courseId} = request.body;

        if(!name || !courseId){
            return response.status(500).json({
                success : false,
                message : "All Fields Required...",
            });
        }

        const courseDetails = await Course.findById(courseId);

        if(!courseDetails){
            return response.status(404).json({
                success : false,
                message : "Course Not Found...",
            });
        }

        const branchDetails = await Branch.create({name , courseId});

        return response.status(200).json({
            success : true,
            message : "Branch Created Successfully...",
            branchDetails
        });
    } catch (error) {
        console.log(error);
        return response.status(200).json({
            success : false,
            message : "Branch Creation Failed...",
            error : error.message,
        });
    }
};

exports.getBranch = async (request , response) => {
    try {
        const {courseId} = request.query;

        if(!courseId){
            return response.status(500).json({
                success : false,
                message : "All Fields Required...",
            });
        }

        const courseDetails = await Course.findById(courseId);

        if(!courseDetails){
            return response.status(404).json({
                success : false,
                message : "Course Not Found...",
            });
        }

        const branchDetails = await Branch.find({courseId : courseId});

        return response.status(200).json({
            success : true,
            message : "Branch Fetched Successfully...",
            branchDetails
        });
    } catch (error) {
        console.log(error);
        return response.status(200).json({
            success : false,
            message : "Branch Fetching Failed...",
            error : error.message,
        });
    }
};