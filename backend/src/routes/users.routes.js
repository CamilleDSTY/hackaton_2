const router = require("express").Router();

const userControllers = require("../controllers/userControllers");
const passwordControllers = require("../controllers/passwordControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", authControllers.isAdmin, userControllers.browse);
router.get("/:id", userControllers.read);
router.put("/:id", passwordControllers.hashPassword, userControllers.edit);
router.post(
  "/",
  authControllers.isAdmin,
  passwordControllers.hashPassword,
  userControllers.add
);
router.delete("/:id", authControllers.isAdmin, userControllers.destroy);

module.exports = router;
