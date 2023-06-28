const router = require("express").Router();
const userRouter = require("./users.routes");

const passwordControllers = require("../controllers/passwordControllers");
const userControllers = require("../controllers/userControllers");

router.use("/users", userRouter);

router.post(
  "/login",
  userControllers.login,
  passwordControllers.verifyPassword
);

module.exports = router;
