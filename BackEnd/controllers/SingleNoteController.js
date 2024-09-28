const SingleNote = require("../models/SingleNote");
const Notes = require("../models/Notes");
const { uploadDataToCloudinary } = require("../utils/dataUploader");
require("dotenv").config();

exports.createSingleNote = async (request, response) => {
    try {
        const { name, notesId } = request.body;
        const { pdf } = request.files;

        if (!name || !notesId || !pdf) {
            return response.status(500).json({
                success: false,
                message: "All Fields required...",
            });
        }

        const notesDetails = await Notes.findById({ _id: notesId });

        if (!notesDetails) {
            return response.status(404).json({
                success: false,
                message: "Notes Folder Not Found..."
            });
        }

        const pdfUpload = await uploadDataToCloudinary(pdf, process.env.FOLDER_NAME);

        const data = await SingleNote.create({ name, notesId, pdfURL: pdfUpload.secure_url });
        await Notes.findByIdAndUpdate({ _id: notesId }, { $push: { data: data } });

        return response.status(200).json({
            success: true,
            message: "Single Note Created...",
            data
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            success: false,
            message: "Single Note Creation Failed...",
            error: error.message,
        });
    }
};