const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/uploadMIddleware");

const { getAllUsers, createUser } = require("./controller");

router.get("/", getAllUsers);
router.post("/", upload.single("image"), createUser);

module.exports = router;
