const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    courseId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course",
    }
});

module.exports = mongoose.model("Branch" , branchSchema);