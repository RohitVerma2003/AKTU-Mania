const PYQs = require("../models/PYQs");
const Years = require("../models/Years");

exports.createPYQs = async (request, response) => {
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

        const PYQDetails = await PYQs.create({ name, yearId , courseId , branchId });

        return response.status(200).json({
            success: true,
            message: "PYQs created successfully...",
            PYQDetails
        })
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "PYQs creation failed...",
            error: error.message,
        });
    }
};

exports.getPYQs = async (request , response) => {
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

        const pyqsData = await PYQs.findOne({courseId : courseId , branchId : branchId , yearId : yearId}).populate("data").exec();

        return response.status(200).json({
            success: true,
            message: "PYQs fetched successfully...",
            pyqsData,
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "PYQs fetching failed...",
            error: error.message,
        });
    }
};