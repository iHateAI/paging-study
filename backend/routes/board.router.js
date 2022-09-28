const express = require("express");
const router = express.Router();

const { boardCtrl } = require("../controllers");

router.get("/", boardCtrl.pagination);

module.exports = router;
