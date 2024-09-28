const mongoose = require("mongoose");

const yearSchema = new mongoose.Schema({
    yearNumber : {
        type : Number,
        required : true
    },
    courseId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course",
        required : true,
    },
    branchId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Branch",
        required : true,
    }
});

module.exports = mongoose.model("Years" , yearSchema);