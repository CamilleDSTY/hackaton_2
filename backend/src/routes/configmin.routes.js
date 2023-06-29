const router = require("express").Router();

const configMinControllers = require("../controllers/configMinControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", configMinControllers.browse);
router.get("/:id", configMinControllers.read);
router.put("/:id", authControllers.isAdmin, configMinControllers.edit);
router.post("/", authControllers.isAdmin, configMinControllers.add);
router.delete("/:id", authControllers.isAdmin, configMinControllers.destroy);

module.exports = router;
