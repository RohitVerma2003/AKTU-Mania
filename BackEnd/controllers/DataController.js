const Data = require("../models/Data");

exports.createData = async (request, response) => {
    try {
        const { quantumId, PYQId, notesId, yearId, courseId, branchId } = request.body;

        if (!yearId || !courseId || !branchId) {
            return response.status(500).json({
                success: false,
                message: "All Fields required...",
            });
        }

        const dataDetails = (await Data.create({ quantumId, PYQId, notesId, yearId, courseId, branchId }));

        return response.status(200).json({
            success: true,
            message: "Data is created successfully...",
            dataDetails,
        })
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Data creation failed...",
            error: error.message,
        });
    }
};

exports.getDataByYearId = async (request, response) => {
    try {
        const { yearId, courseId , branchId } = request.body || request.params;

        if (!courseId || !yearId || !branchId) {
            return response.status(500).json({
                success: false,
                message: "All Fields required...",
            });
        }

        const data = await Data.find({ yearId: yearId, courseId: courseId , branchId : branchId }).populate("yearId").populate("courseId").populate("branchId").populate({ path: "quantumId", populate: { path: "data" } }).populate({ path: "PYQId", populate: { path: "data" } }).populate({ path: "notesId", populate: { path: "data" } }).exec();

        return response.status(200).json({
            success: true,
            message: "Data fetched successfully...",
            data
        })
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Data fetching failed...",
            error: error.message,
        });
    }
}