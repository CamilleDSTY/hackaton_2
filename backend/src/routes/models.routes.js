const router = require("express").Router();

const modelControllers = require("../controllers/modelControllers");
const authControllers = require("../controllers/authControllers");
const uploadControllers = require("../controllers/uploadControllers");

router.get("/", modelControllers.browse);
router.get("/:id", modelControllers.read);
router.put("/:id", authControllers.isAdmin, modelControllers.edit);
router.post(
  "/",
  authControllers.isAdmin,
  uploadControllers.uploadModelImage,
  modelControllers.add
);
router.delete("/:id", authControllers.isAdmin, modelControllers.destroy);

module.exports = router;
