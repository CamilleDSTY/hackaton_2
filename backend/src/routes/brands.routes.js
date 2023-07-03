const router = require("express").Router();

const brandControllers = require("../controllers/brandControllers");
const authControllers = require("../controllers/authControllers");
const uploadBrandLogoControllers = require("../controllers/uploadBrandLogoControllers");

router.get("/", brandControllers.browse);
router.get("/:id", brandControllers.read);
router.put("/:id", authControllers.isAdmin, brandControllers.edit);
router.post(
  "/",
  authControllers.isAdmin,
  uploadBrandLogoControllers.uploadBrandLogo,
  brandControllers.add
);
router.delete("/:id", authControllers.isAdmin, brandControllers.destroy);

module.exports = router;
