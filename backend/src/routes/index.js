const router = require("express").Router();
const userRouter = require("./users.routes");

const passwordControllers = require("../controllers/passwordControllers");
const userControllers = require("../controllers/userControllers");

router.post(
  "/login",
  userControllers.login,
  passwordControllers.verifyPassword
);
router.use("/users", userRouter);

module.exports = router;
