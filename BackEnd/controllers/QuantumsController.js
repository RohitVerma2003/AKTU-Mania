const Quantums = require("../models/Quantums");
const Years = require("../models/Years");
const Course = require("../models/Course");
const Branch = require("../models/Branch");

exports.createQuantums = async (request , response) => {
    try {
        const { name, courseId, branchId, yearId } = request.body;

        if (!name || !courseId || !branchId || !yearId) {
            return response.status(500).json({
                success: false,
                message: "All Fields required...",
            });
        }

        const isValid = await Years.findById({ _id: yearId });

        if (!isValid || isValid?.courseId !== courseId || isValid?.branchId !== branchId) {
            return response.status(500).json({
                success: false,
                message: "Data not found...",
            });
        }

        const quantumsDetails = await Quantums.create({name , yearId , courseId , branchId});

        return response.status(200).json({
            success : true,
            message : "Quantums created successfully...",
            quantumsDetails,
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Quantums creation failed...",
            error: error.message,
        });
    }
};

exports.getQuantums = async (request , response) => {
    try {
        const { courseId, branchId, yearId } = request.query;

        if ( !courseId || !branchId || !yearId) {
            return response.status(500).json({
                success: false,
                message: "All Fields required...",
            });
        }

        const courseDetails = await Course.findById({ _id: courseId });
        const branchDetails = await Branch.findById({ _id: branchId });
        const yearDetails = await Years.findById({ _id: yearId });

        if (!courseDetails || !branchDetails || !yearDetails) {
            return response.status(500).json({
                success: false,
                message: "Data not found...",
            });
        }

        const quantumsData = await Quantums.findOne({courseId : courseId , branchId : branchId , yearId : yearId}).populate("data").exec();

        return response.status(200).json({
            success: true,
            message: "Quantums fetched successfully...",
            quantumsData,
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Quantums fetching failed...",
            error: error.message,
        });
    }
};