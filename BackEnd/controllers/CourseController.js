const Course = require("../models/Course");

exports.createCourse = async (request , response) => {
    try {
        const {courseName} = request.body;

        const courseDetails = await Course.create({courseName});

        return response.status(200).json({
            success : true,
            message : "Course created successfully...",
            courseDetails 
        })
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success : false,
            message : "Course creation failed...",
            error : error.message,
        });
    }
};

exports.getAllCourses = async (request , response) => {
    try {
        const courseDetails = await Course.find({});

        return response.status(200).json({
            success : true,
            message : "Courses fetched successfully...",
            courseDetails 
        })
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success : false,
            message : "Courses fetching failed...",
            error : error.message,
        });
    }
};