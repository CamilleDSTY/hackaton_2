const router = require("express").Router();

const storageControllers = require("../controllers/storageControllers");

router.get("/", storageControllers.browse);
router.get("/:id", storageControllers.read);
router.put("/:id", storageControllers.edit);
router.post("/", storageControllers.add);
router.delete("/:id", storageControllers.destroy);

module.exports = router;
