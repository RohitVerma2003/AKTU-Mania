const express = require("express");
const { createYear, getYearsByCourseId } = require("../controllers/YearsController");
const router = express.Router();

router.post("/createYear" , createYear);
router.get("/getYearsByCourseId" , getYearsByCourseId);

module.exports = router;