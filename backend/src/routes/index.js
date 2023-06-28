const router = require("express").Router();
const userRouter = require("./users.routes");
const brandRouter = require("./brands.routes");
const categoryRouter = require("./categories.routes");
const ramRouter = require("./rams.routes");
const stateRouter = require("./states.routes");
const storageRouter = require("./storages.routes");
const configMinRouter = require("./configmin.routes");
const modelRouter = require("./models.routes");

const passwordControllers = require("../controllers/passwordControllers");
const userControllers = require("../controllers/userControllers");

router.use("/users", userRouter);
router.use("/brands", brandRouter);
router.use("/categories", categoryRouter);
router.use("/rams", ramRouter);
router.use("/states", stateRouter);
router.use("/storages", storageRouter);
router.use("/configmin", configMinRouter);
router.use("/models", modelRouter);

router.post(
  "/login",
  userControllers.login,
  passwordControllers.verifyPassword
);

module.exports = router;
