const mongoose = require("mongoose");

const singleNoteSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    pdfURL : {
        type : String,
        required : true,
    },
    notesId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Notes",
        reuired : true,
    }
});

module.exports = mongoose.model("SingleNote" , singleNoteSchema);