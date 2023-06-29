const router = require("express").Router();

const brandControllers = require("../controllers/brandControllers");

router.get("/", brandControllers.browse);
router.get("/:id", brandControllers.read);
router.put("/:id", brandControllers.edit);
router.post("/", brandControllers.add);
router.delete("/:id", brandControllers.destroy);

module.exports = router;
