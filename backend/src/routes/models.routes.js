const router = require("express").Router();

const modelControllers = require("../controllers/modelControllers");
const uploadControllers = require("../controllers/uploadControllers");

router.get("/", modelControllers.browse);
router.get("/:id", modelControllers.read);
router.put("/:id", modelControllers.edit);
router.post("/", uploadControllers.uploadModelImage, modelControllers.add);
router.delete("/:id", modelControllers.destroy);

module.exports = router;
