const Years = require("../models/Years");
const Course = require("../models/Course");

exports.createYear = async (request, response) => {
    try {
        const { yearNumber, courseId, branchId } = request.body;

        const yearDetails = await Years.create({ yearNumber, courseId, branchId });

        return response.status(200).json({
            success: true,
            message: "Year created successfully...",
            yearDetails
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Year creation failed...",
            error: error.message
        });
    }
};

exports.getYearsByCourseId = async (request, response) => {
    try {
        const { courseId } = request.query;

        const courseDetails = await Course.findById(courseId);

        if (!courseDetails) {
            return response.status(404).json({
                success: false,
                message: "Course Not Found...",
            });
        }

        const yearDetails = await Years.find({ courseId: courseId });

        return response.status(200).json({
            success: true,
            message: "Years fetched successfully...",
            yearDetails
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Year fetching failed...",
            error: error.message
        });
    }
};