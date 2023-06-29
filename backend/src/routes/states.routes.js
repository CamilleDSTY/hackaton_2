const router = require("express").Router();

const stateControllers = require("../controllers/stateControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", stateControllers.browse);
router.get("/:id", stateControllers.read);
router.put("/:id", authControllers.isAdmin, stateControllers.edit);
router.post("/", authControllers.isAdmin, stateControllers.add);
router.delete("/:id", authControllers.isAdmin, stateControllers.destroy);

module.exports = router;
