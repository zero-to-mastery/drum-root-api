const express = require("express");

const router = express.Router();

const { signin, signout } = require("../controllers/authController");
const { getLayout } = require("../controllers/drumController");
const { uploadSound } = require("../controllers/uploadController");
const { requireAuth } = require("../middleware/auth");

router.post("/signin", signin);
router.post("/signout", signout);
router.get("/drumlayout", requireAuth, getLayout);
router.post("/uploadsound", uploadSound); //posts a drum sound file

module.exports = router;
