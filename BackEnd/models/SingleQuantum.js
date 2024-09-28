const mongoose = require("mongoose");

const singleQuantumSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    pdfURL : {
        type : String,
        required : true,
    },
    quantumsId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Quantums",
        reuired : true,
    }
});

module.exports = mongoose.model("SingleQuantum" , singleQuantumSchema);