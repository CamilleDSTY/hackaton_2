const router = require("express").Router();

const configMinControllers = require("../controllers/configMinControllers");

router.get("/", configMinControllers.browse);
router.get("/:id", configMinControllers.read);
router.put("/:id", configMinControllers.edit);

module.exports = router;
