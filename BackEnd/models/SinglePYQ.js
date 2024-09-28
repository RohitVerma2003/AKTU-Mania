const mongoose = require("mongoose");

const singlePYQSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    pdfURL : {
        type : String,
        required : true,
    },
    PYQsId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "PYQs",
        reuired : true,
    }
});

module.exports = mongoose.model("SinglePYQ" , singlePYQSchema);