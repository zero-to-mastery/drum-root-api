const express = require("express");

const router = express.Router();

const { signin, signout } = require("../controllers/authController");
const { getLayout } = require("../controllers/drumController");
const { requireAuth } = require("../middleware/auth");

router.post("/signin", signin);
router.post("/signout", signout);
router.get("/drumlayout", requireAuth, getLayout);

module.exports = router;
