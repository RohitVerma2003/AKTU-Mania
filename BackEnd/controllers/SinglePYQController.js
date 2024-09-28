const SinglePYQ = require("../models/SinglePYQ");
const PYQs = require("../models/PYQs");
const { uploadDataToCloudinary } = require("../utils/dataUploader");
require("dotenv").config();

exports.createSinglePYQ = async (request, response) => {
    try {
        const { name, PYQsId } = request.body;
        const { pdf } = request.files;

        if (!name || !PYQsId || !pdf) {
            return response.status(500).json({
                success: false,
                message: "All Fields required...",
            });
        }

        const pyqsDetails = await PYQs.findById({ _id: PYQsId });

        if (!pyqsDetails) {
            return response.status(404).json({
                success: false,
                message: "PYQs Folder Not Found..."
            });
        }

        const pdfUpload = await uploadDataToCloudinary(pdf, process.env.FOLDER_NAME);

        const data = await SinglePYQ.create({ name, PYQsId, pdfURL: pdfUpload.secure_url });
        await PYQs.findByIdAndUpdate({ _id: PYQsId }, { $push: { data: data } });

        return response.status(200).json({
            success: true,
            message: "Single PYQ Created...",
            data
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Single PYQ Creation Failed...",
            error: error.message,
        });
    }
};