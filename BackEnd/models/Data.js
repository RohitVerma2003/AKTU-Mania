const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    quantumId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Quantums",
    },
    PYQId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PYQs",
    },
    notesId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Notes",
    },
    yearId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Years",
    },
    courseId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course",
    },
    branchId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Branch",
        required : true,
    }
});

module.exports = mongoose.model("Data" , dataSchema);