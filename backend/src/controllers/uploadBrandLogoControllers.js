const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images/brands"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-brands-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadBrandLogo = (req, res, next) => {
  upload.single("logo")(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      if (!req.file) {
        req.body.image = null;
      } else {
        req.body.image = req.file.filename;
      }
      next();
    }
  });
};

module.exports = { uploadBrandLogo };
