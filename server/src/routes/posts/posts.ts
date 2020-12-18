import express from "express";
import PostsController from "../../controllers/posts/PostsController";
import verifyUser from "../../middleware/verifyUser";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../db/assets/posts"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", PostsController.index);
router.get("/lastest", PostsController.lastest);

// Private routes
router.use(verifyUser);
router.post("/create", upload.single("postPhoto"), PostsController.create);

export default router;
