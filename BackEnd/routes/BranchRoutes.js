const express = require("express");
const { createBranch, getBranch } = require("../controllers/BranchController");
const router = express.Router();

router.post("/createBranch" , createBranch);
router.get("/getBranch" , getBranch);

module.exports = router;