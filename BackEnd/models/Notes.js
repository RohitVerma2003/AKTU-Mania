const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    data: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SingleNote",
    }],
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    branchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch",
    },
    yearId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Years",
    },
});

module.exports = mongoose.model("Notes", notesSchema);