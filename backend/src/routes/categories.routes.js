const router = require("express").Router();

const categoryControllers = require("../controllers/categoryControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", categoryControllers.browse);
router.get("/:id", categoryControllers.read);
router.put("/:id", authControllers.isAdmin, categoryControllers.edit);
router.post("/", authControllers.isAdmin, categoryControllers.add);
router.delete("/:id", authControllers.isAdmin, categoryControllers.destroy);

module.exports = router;
