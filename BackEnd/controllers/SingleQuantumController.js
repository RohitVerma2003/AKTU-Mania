const SingleQuantum = require("../models/SingleQuantum");
const Quantums = require("../models/Quantums");
const { uploadDataToCloudinary } = require("../utils/dataUploader");
require("dotenv").config();

exports.createSingleQuantum = async (request, response) => {
    try {
        const { name, quantumsId } = request.body;
        const { pdf, image } = request.files;

        if (!name || !image || !quantumsId || !pdf) {
            return response.status(500).json({
                success: false,
                message: "All Fields required...",
            });
        }

        const quantumsDetails = await Quantums.findById({ _id: quantumsId });

        if (!quantumsDetails) {
            return response.status(404).json({
                success: false,
                message: "Quantums Folder Not Found..."
            });
        }

        const imageUpload = await uploadDataToCloudinary(image, process.env.FOLDER_NAME);
        const pdfUpload = await uploadDataToCloudinary(pdf, process.env.FOLDER_NAME);

        if (!imageUpload.secure_url || !pdfUpload.secure_url) {
            return response.status(500).json({
                success: false,
                message: "File upload to Cloudinary failed...",
            });
        }

        const data = await SingleQuantum.create({ name, quantumsId, pdfURL: pdfUpload.secure_url, image: imageUpload.secure_url });
        await Quantums.findByIdAndUpdate(quantumsId, { $push: { data: data._id } });

        return response.status(200).json({
            success: true,
            message: "Single Quantum Created...",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Single Quantum Creation Failed...",
            error: error.message,
        });
    }
};