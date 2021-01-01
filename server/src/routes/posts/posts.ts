import express from "express";
import PostsController from "../../controllers/posts/PostsController";
import verifyUser from "../../middleware/verifyUser";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../db/assets/posts"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/article", PostsController.article);
router.get("/lastest", PostsController.lastest);
router.get("/postPreviewImage", PostsController.postPreviewImage);
router.get("/articleImage", PostsController.articleImage);
router.get("/:pageNumber", PostsController.articles);
router.get("/", PostsController.index);

// Private routes
router.post("/create", verifyUser, upload.single("postPhoto"), PostsController.create);

export default router;
