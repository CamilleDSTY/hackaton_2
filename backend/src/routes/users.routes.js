const router = require("express").Router();

const userControllers = require("../controllers/userControllers");
const passwordControllers = require("../controllers/passwordControllers");

router.get("/", userControllers.browse);
router.get("/:id", userControllers.read);
router.put("/:id", passwordControllers.hashPassword, userControllers.edit);
router.post("/", passwordControllers.hashPassword, userControllers.add);
router.delete("/:id", userControllers.destroy);

module.exports = router;
