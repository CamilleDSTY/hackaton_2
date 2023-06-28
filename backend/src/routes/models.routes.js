const router = require("express").Router();

const modelControllers = require("../controllers/modelControllers");

router.get("/", modelControllers.browse);
router.get("/:id", modelControllers.read);
router.put("/:id", modelControllers.edit);
router.post("/", modelControllers.add);
router.delete("/:id", modelControllers.destroy);

module.exports = router;
