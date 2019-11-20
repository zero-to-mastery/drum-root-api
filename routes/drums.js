const express = require("express");

const router = express.Router();

const { requireAuth } = require("../middleware/auth");
const { getLayout } = require("../controllers/drumLayout");

router.get("/drum-layout", requireAuth, getLayout);

module.exports = router;
