const Property = require("../models/image");
// const auth = require("../middleware/auth");
const { Router } = require("express");
const {
    getImages,
} = require("../controller/propertyNormalController");
const {addImage} = require("../controller/ApiController")
const router = Router();

router.get("/get-images", getImages);
router.post("/add-images", addImage)

module.exports = router;