const router = require("express").Router();

const ramControllers = require("../controllers/ramControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", ramControllers.browse);
router.get("/:id", ramControllers.read);
router.put("/:id", authControllers.isAdmin, ramControllers.edit);
router.post("/", authControllers.isAdmin, ramControllers.add);
router.delete("/:id", authControllers.isAdmin, ramControllers.destroy);

module.exports = router;
