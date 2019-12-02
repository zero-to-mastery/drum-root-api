const express = require("express");

const router = express.Router();

const { signin, signout } = require("../controllers/authController");
const { getLayout } = require("../controllers/drumController");
const { uploadSound } = require("../controllers/uploadController");
const { requireAuth } = require("../middleware/auth");

router.post("/signin", signin);
router.post("/signout", signout);
router.get("/drumlayout", requireAuth, getLayout);
router.get("/uploadsound", uploadSound); //displays form to upload the sound
router.post("/uploadsound", uploadSound); //posts the sound file

module.exports = router;
