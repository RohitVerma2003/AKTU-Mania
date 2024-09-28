const Notes = require("../models/Notes");
const Years = require("../models/Years");

exports.createNotes = async (request, response) => {
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

        const notesDetails = await Notes.create({ name, courseId, branchId, yearId });

        return response.status(200).json({
            success: true,
            message: "Notes created successfully...",
            notesDetails,
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Notes creation failed...",
            error: error.message,
        });
    }
};

exports.getNotes = async (request , response) => {
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

        const notesData = await Notes.findOne({courseId : courseId , branchId : branchId , yearId : yearId}).populate("data").exec();

        return response.status(200).json({
            success: true,
            message: "Notes fetched successfully...",
            notesData,
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Notes fetching failed...",
            error: error.message,
        });
    }
};