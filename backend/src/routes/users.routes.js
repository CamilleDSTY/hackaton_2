const router = require("express").Router();

const userControllers = require("../controllers/userControllers");
const passwordControllers = require("../controllers/passwordControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put(
  "/users/:id",
  passwordControllers.hashPassword,
  userControllers.edit
);
router.post("/users", passwordControllers.hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.destroy);
