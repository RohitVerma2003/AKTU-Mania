const express = require("express");
const { createData, getDataByYearId } = require("../controllers/DataController");
const { createPYQs, getPYQs } = require("../controllers/PYQController");
const { createQuantums, getQuantums } = require("../controllers/QuantumsController");
const { createNotes, getNotes } = require("../controllers/NotesController");
const { createSingleQuantum } = require("../controllers/SingleQuantumController");
const { createSingleNote } = require("../controllers/SingleNoteController");
const { createSinglePYQ } = require("../controllers/SinglePYQController");
const router = express.Router();

router.post("/createData" , createData);
router.get("/getDataByYearId" , getDataByYearId);

router.post("/createPYQs" , createPYQs);
router.post("/createQuantums" , createQuantums);
router.post("/createNotes" , createNotes);

router.post("/createSingleQuantum" , createSingleQuantum);
router.post("/createSingleNote" , createSingleNote);
router.post("/createSinglePYQ" , createSinglePYQ);

router.get("/getPYQs" , getPYQs);
router.get("/getQuantums" , getQuantums);
router.get("/getNotes" , getNotes);

module.exports = router;