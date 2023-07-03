const router = require("express").Router();

const storageControllers = require("../controllers/storageControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", storageControllers.browse);
router.get("/:id", storageControllers.read);
router.put("/:id", authControllers.isAdmin, storageControllers.edit);
router.post("/", authControllers.isAdmin, storageControllers.add);
router.delete("/:id", authControllers.isAdmin, storageControllers.destroy);

module.exports = router;
